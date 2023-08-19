#!/usr/bin/node
// The business model
const mongoose = require('mongoose');
const User = require('./usersModel.js');

const businessSchema = new mongoose.Schema({
    business_name : String,
    contact_name : String,
    contact_email : String,
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    knowledge_base : String
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema)
