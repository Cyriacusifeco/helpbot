#!/usr/bin/node
// The business model
const mongoose = require('mongoose');
const User = require('./usersModel.js');

const businessSchema = new mongoose.Schema({
    business_name : String,
    business_email : String,
    pnumber: String,
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    knowledge_name : String,
    cac_name: String
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema)
