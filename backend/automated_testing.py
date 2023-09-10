#!/usr/bin/python3
"""This is automated testing for this api"""
import requests

url = ''

#create user
user_information = {
    'usernmae': 'tester',
    'password': 'testerpass',
    'email': 'test@test.tester'
}
user = requests.post(url, params=user_information)
print(f"user_created sucessfully: {user.json()}")
user_id = user.get('_id')

#create_Business
business_information = {
    'user_id': user_id,
    'business_name': 'helpBooot',
    'business_email': 'email@business.com',
    'usernmae': 'tester',
    'password': 'testerpass',
    'email': 'test@test.tester'
}
business = requests.post(url, params=business_information)
print(f"user_created sucessfully: {business.json()}")
business_id = business.get('_id')

#create query
query_information = {
    'business_id': business_id,
    'query_text': 'what is it about your AI',
    'user_id': user_id,
    'business_name': 'helpBooot',
    'business_email': 'email@business.com',
    'usernmae': 'tester',
    'password': 'testerpass',
    'email': 'test@test.tester'
}
query = requests.post(url, params=query_information)
print(f"user_created sucessfully: {query.json()}")



