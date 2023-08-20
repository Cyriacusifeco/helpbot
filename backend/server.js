#!/usr/bin/node
// The overall structure of the server.js file is as follows:
// 1. Import the required modules
// 2. Initialize the app
// 3. Connect to the database
// 4. Define the routes
// 5. Start the server
// 6. Listen for requests
const express = require('express')
const colors =  require('colors')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')
const port = process.env.PORT || 5000
console.log(`${port}`.cyan.underline)

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', require('./endpoint/users/users.js'))
app.use('/api', require('./endpoint/business/business.js'))
app.use('/api', require('./endpoint/query/query.js'))
app.use('/api', require('./endpoint/stats/stats.js'))

app.get('/', (req, res) => {
    res.json({'status': 'success', 'message': 'welcome to the Helpbot API'})
})

app.get('/status', (req, res) => {
    res.json({'status': 'success'})
})


app.listen(port, '127.0.0.1', () =>
{
    console.log('welcome to the helpbot and thw world of achievable goals'.rainbow)
})
