#!/usr/bin/node
// The User Model
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
  }, { timestamps: true });


module.exports = mongoose.model('User', userSchema)
