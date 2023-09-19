import base64
import requests
import sys


file_name = './Lorem_ipsum.pdf'

file_encoded = None
with open(file_name, "rb") as image_file:
    file_encoded = base64.b64encode(image_file.read()).decode('utf-8')

r_json = { 'name': file_name, 'data': file_encoded, 'id': '6509a0e6192e5ffc6c64382f' }


r = requests.post("http://127.0.0.1:3000/file/knowledge", json=r_json)
print(r.json())
