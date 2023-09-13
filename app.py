#!/usr/bin/python3
from gpt_index import (
        SimpleDirectoryReader,
        GPTListIndex,
        GPTSimpleVectorIndex,
        LLMPredictor, PromptHelper
        )
from langchain.chat_models import ChatOpenAI
from flask import Flask, request, jsonify
import pymongo
from pymongo import MongoClient
from bson import ObjectId
from dotenv import load_dotenv
import sys
import os


app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Access the API key
api_key = os.getenv("OPENAI_API_KEY")
# os.environ["OPENAI_API_KEY"] = 'Your API Key'


def fetch_business_data(api_key):
    """
    fetch business data from database.
    """

    try:
        # Connect to MongoDB(replace with database connection string)
        client = pymongo.MongoClient("mongodb://localhost:27017/")
        db = client["users"]  # Replace with actual database name

        # Convert the provided API key to an ObjectId
        business_id = ObjectId(api_key)

        # Fetch business data based on the ObjectId
        business_data = db["businesses"].find_one({"_id": business_id})

        # Fetch business data based on apiKey
        # business_data = db["businesses"].find_one({"_id": api_key})

        # print(api_key)

        # Close the database connection
        client.close()

        if business_data is None:
            raise ValueError("No business data found for the provided API key")

        return business_data['knowledge_content']

    except Exception as e:
        # Handle any exceptions that occur during database access
        print("Error fetching business data:", e)
        return None


def construct_index(business_data):
    """
    To construct querry index.
    """
    max_input_size = 4096
    num_outputs = 512
    max_chunk_overlap = 20
    chunk_size_limit = 600

    prompt_helper = PromptHelper(
            max_input_size,
            num_outputs,
            max_chunk_overlap,
            chunk_size_limit=chunk_size_limit
            )

    llm_predictor = LLMPredictor(
            llm=ChatOpenAI(
                temperature=0.7,
                model_name="gpt-3.5-turbo",
                max_tokens=num_outputs
                )
            )

    # Create a temporary directory
    temp_dir = 'temp_directory'

    try:
        os.makedirs(temp_dir, exist_ok=True)

    except OSError as e:
        print(f"Error creating temporary directory: {e}")

    # Write the business data to a text file in the temp directory
    text_file_path = os.path.join(temp_dir, 'business_data.txt')

    try:
        with open(text_file_path, 'w') as f:
            f.write(business_data)

    except Exception as e:
        print(f"Error writing business data to file: {e}")

    # Load the business_data and build the document list.
    try:
        document = SimpleDirectoryReader(temp_dir).load_data()

    except Exception as e:
        print(f"Error loading data from temp directory: {e}")

    # Build the index
    try:
        index = GPTSimpleVectorIndex(
                document,
                llm_predictor=llm_predictor,
                prompt_helper=prompt_helper
                )

    except Exception as e:
        print(f"Error loading index: {e}")

    index.save_to_disk('index.json')

    # Remove the temporary directory and its contents
    try:
        for filename in os.listdir(temp_dir):
            file_path = os.path.join(temp_dir, filename)
            os.remove(file_path)
        os.rmdir(temp_dir)

    except Exception as e:
        print(f"Error removing temporary directory: {e}")

    return index


def chatbot(input_text):
    index = GPTSimpleVectorIndex.load_from_disk('index.json')
    response = index.query(input_text, response_mode="compact")
    return response.response


@app.route('/api/chatbot', methods=['POST'])
def chat_with_bot():
    # Get input_text and apiKey from the request
    input_text = request.json.get('input_text')
    api_key = request.json.get('apiKey')

    if not api_key:
        return jsonify({'error': 'No API key provided'})

    # Use the apiKey to fetch relevant business data from the database
    business_data = fetch_business_data(api_key)

    if not business_data:
        return jsonify({'error': 'Invalid API key'})

    # Construct the index using the fetched business data
    index = construct_index(business_data)

    # Use the constructed index to get the bot response
    response = chatbot(input_text)

    return jsonify({'response': response})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=7860)
