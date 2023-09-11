#!/usr/bin/python3
import pymongo
from pymongo import MongoClient

# Connect to the MongoDB database
client = MongoClient('mongodb://localhost:27017/')
db = client['users']

# Specify the collection where you want to add data
collection = db['businesses']

# Define the new business data as a dictionary
new_business_data = {
    'api_key': 'new_api_key',
    'name': 'Seplorte',
    'data': 'Selporte is aggregating eCommerce',
}

# Insert the new business data into the collection
insert_result = collection.insert_one(new_business_data)

# Check if the insertion was successful
if insert_result.acknowledged:
    print("New business data added successfully.")
else:
    print("Failed to add new business data.")
