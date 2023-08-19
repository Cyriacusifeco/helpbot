#!/usr/bin/node
// The query api controller
const expressAsyncHandler = require('express-async-handler');
const Business = require('../../models/businessModel.js');
const Query = require('../../models/queryModel.js');
const colors = require('colors')


const CreateQuery = expressAsyncHandler(async (req, res) => {
    if (!req.body.business_id) {
        res.status(400);
        throw new Error('There must be a business_id in the request body');
    }
    const business = Business.findById(req.body.business_id);
    if (!business) {
        res.status(404);
        throw new Error('Business not found');
    }
    if (!req.body.query_text) {
        res.status(400);
        throw new Error('Please Enter a query text');
    }
    const query = await Query.create({ query_text: req.body.query_text,
        response_text: req.body.response_text, feedback_text: req.body.feedback_text,
        feedback_rating: req.body.feedback_rating, business_id: req.body.business_id });
    res.status(201).json(query);
});

const getQueries = expressAsyncHandler(async (req, res) => {
    const queries = await Query.find();
    res.json(queries);
});

const getQuery = expressAsyncHandler(async (req, res) => {
    const query = await Query.findById(req.params.id);
    if (!query) {
        res.status(404);
        throw new Error('Query not found');
    }
    res.status(200).json(query);
});

const updateQuery = expressAsyncHandler(async (req, res) => {
    const query = await Query.findById(req.params.id);
    if (!query) {
        res.status(404);
        throw new Error('Query not found');
    }
    const updatedItems = {};
    if (req.body.query_text) {
        updatedItems.query_text = req.body.query_text;
    }
    if (req.body.response_text) {
        updatedItems.response_text = req.body.response_text;
    }
    if (req.body.feedback_text) {
        updatedItems.feedback_text = req.body.feedback_text;
    }
    if (req.body.feedback_rating) {
        updatedItems.feedback_rating = req.body.feedback_rating;
    }
    const UpdatedQuery = await Query.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true})
    const newQuery = await Query.findById(req.params.id);
    res.status(200).json(newQuery);
});

const deleteQuery = expressAsyncHandler(async (req, res) => {
    const query = await Query.findById(req.params.id);
    if (!query) {
        res.status(404);
        throw new Error('Query not found');
    }
    const holder = await Query.findByIdAndDelete(req.params.id);
    holder ? res.status(200).json(query): res.status(404).json({message: 'query not deleted'});
});

module.exports = { CreateQuery, getQueries, getQuery, updateQuery, deleteQuery};
