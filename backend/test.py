import requests

# Define the API endpoint URL
url = "http://your-api-url.com/createUser"

# Define the payload (data to be sent as JSON)
data = {
    "username": "your_username",
    "password": "your_password",
    "email": "your_email@example.com"
}

try:
    # Send an HTTP POST request with the JSON data
    response = requests.post(url, json=data)

    # Check if the request was successful (status code 201 for created)
    if response.status_code == 201:
        # Parse the JSON response
        user_data = response.json()
        print("User created successfully:")
        print(user_data)
    else:
        print("Failed to create user. Status code:", response.status_code)

except requests.exceptions.RequestException as e:
    print("Request error:", e)
