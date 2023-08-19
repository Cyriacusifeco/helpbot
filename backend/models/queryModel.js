#!/usr/bon/node
//Customer query model
const mongoose = require('mongoose')
const Business = require('./businessModel.js')

const querySchema = new mongoose.Schema({
    query_text : String,
    response_text : String,
    feedback_text : String,
    feedback_rating : Number,
    business_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Business
}}, { timestamps: true });

module.exports = mongoose.model('Query', querySchema)
