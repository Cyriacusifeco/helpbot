## Documentation of the HelpBot API

The documentation of ***helpBot API*** written by [Oyebamiji Mustapha](https://twitter.com/musoye1)


### Stats

GET /api/stats -> state the number of users, businesses and queries in the api database


### Users

Data inside {_id, username, email, password, api_key(handled separately) createdAt, updatedAt}

GET /api/users -> get all users

POST /api/users -> create a new user.
The json must contain **username and password**. The password will be hashed using bcrypt and salt with salt-round value of 10

PUT /api/user/:id -> update a user with a particular id

GET /api/user/:id -> get all info about a particular user with a particular id

DELETE /api/user/:id -> delete a particular user with a particular id

GET /users/:user_id/businesses -> get all businesses own by a user

### Api Token/Key
The request here must conatin the user_id as **user_id** in the json
This handle generatin of Token it will return a json of this format {api_key: api_key}

GET /api/gen_token -> generation of an api token/key
GET /api/get_token -> retrieving of an api token /key


### Business
Data inside {_id, business_name, business_email, user_id, industry,  pnumber->String, knowledge_name, knowledge_content cac_name, createdAt, updatedAt}

GET /api/businesses -> get all Businesses

POST /api/business/register-> create a new Business.
The json must contain **user_id, business_name and business_email**

PUT /api/business/:id -> update a particuler business with information **except that of  knowledge_name, knowledge_content and cac_name which are handled separately below**

GET /business/:id -> get all info about a particular business with its id

DELETE /business/:id -> Delete a Particular business

GET /business/:business_id/queries -> Get all queries under a business

### Knowledge file(bot) json {id ,name, data} -> all must be included
POST /file/knowledge/ -> Send the file with a particular business id, ***data*** -> The content of the file encode in base 64, name-> the name of the file.
The content of the pdf file will be in knowledge_content

###### CAC file
POST /file/cac/:id -> send the file with a particular business id

### QUERIES

Data inside {_id, query_text, response_text, feedback_text, feedback_rating->Number, business_id, createdAt, updatedAt}

GET /api/queries-> get all queries

POST /api/queries -> create a new query.
The json must contain **business_id, query_text**.

PUT /api/queries/:id -> update a particular query

GET /api/query/:id-> get all info about a particular query with a particular id

DELETE /api/query/:id -> delete a particular query with a particular id

### Searches
NOTE: the key-value that will be take account for are the one mention in each cases below

POST /api/users_search -> sent a json of key-value and what to search
-> The result of users found will be sent back.
You can only use the  key-value pair of  **username, email** in searching

GET /api/businesses_search -> sent a json of key-value and what to search
-> The result of businesses found will be sent back.
You can only use the  key-value pair of  **business_name, business_email** in searching

GET /api/queries_search -> sent a json of key-value and what to search
-> The result of queries found will be sent back.
You can only use the  key-value pair of  **query_text, feedback_text, feedback_rating** in searching

### hashing

GET /api/hash_passwd -> Get the hash value of a particular password. The password will be in a json with a key  of password

POST /api/check_passwd -> check if a password matches a hashed value. The json will contain **password, hashpassword**. Then it will return a json with **matches** as a key in the json value. which either assume the value of True or False as the case may be.





