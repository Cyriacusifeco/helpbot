#!/usr/bin/node
// The business model
const mongoose = require('mongoose');
const User = require('./usersModel.js');

const businessSchema = new mongoose.Schema({
    business_name : String,
    business_email : String,
    business_website : String,
    pnumber: String,
    industry: String,
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    knowledge_name : String,
    knowledge_content: String,
    cac_name: String
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema)
