#!/usr/bin/node
// The business api controller
const expressAsyncHandler = require('express-async-handler');
const User = require('../../models/usersModel.js');
const Business = require('../../models/businessModel.js');
const Query = require('../../models/queryModel.js');
const colors = require('colors');

const CreateBusiness = expressAsyncHandler(async (req, res) => {
    if(!req.body.user_id){
        res.status(400);
        throw new Error('There must be a user_id in the request body');
    }
    const user = await User.findById(req.body.user_id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    if (!req.body.business_name || !req.body.business_email) {
        res.status(400);
        throw new Error('Please Enter a business name, contact name, or a contact email');
    }
    const business  = await Business.create({ business_name: req.body.business_name, 
        business_email: req.body.business_email, industry: req.body.industry, pnumber: req.body.pnumber, user_id: req.body.user_id });
    res.status(201).json(business);
});

const getBusinesses = expressAsyncHandler(async (req, res) => {
    const businesses = await Business.find();
    res.json(businesses);
});

const getBusiness = expressAsyncHandler(async (req, res) => {
    // get all businesses
    const business = await Business.findById(req.params.id);
    if (!business) {
        res.status(404);
        throw new Error('business not found');
    } 
    res.status(200).json(business);
});

const updateBusiness = expressAsyncHandler(async (req, res) => {
    const business = await Business.findById(req.params.id);
    if (!business) {
        res.status(404);
        throw new Error('business not found');
    }
    const updatedItems = {};
    if (req.body.business_name) {
        updatedItems.business_name = req.body.business_name;
    }
    if (req.body.business_email) {
        updatedItems.business_email = req.body.business_email;
    }
    if (req.body.pnumber) {
        updatedItems.pnumber = req.body.pnumber;
    }
    if (req.body.industry) {
        updatedItems.industry = req.body.industry;
    }
    const UpdatedBusiness = await Business.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true})
    const newBusiness = await Business.findById(req.params.id);
    res.status(200).json(newBusiness);
});

const deleteBusiness = expressAsyncHandler(async (req, res) => {
    const business = await Business.findById(req.params.id);
    if (!business) {
        res.status(404);
        throw new Error('business not found');
    }
    const holder = await Business.deleteOne({_id: req.params.id});
    holder ? res.status(200).json(business): res.status(404).json({message: 'business not deleted'});
});

const BusinessQueries = expressAsyncHandler(async (req, res) => {
    //Get all Queries of a business
    const query = await Query.find({business_id: req.params.business_id});
    if (!query) {
        res.status(404);
        throw new Error('query not found');
    } 
    res.status(200).json(query);
});

const businessSearch = expressAsyncHandler(async (req, res) => {
    //Search for a business
    const search = {business_name: req.body.business_name, business_email: req.body.business_email}
    const business = await Business.find(search);
    if (!business) {
        res.status(404);
        throw new Error('business not found');
    }
    res.status(200).json(business);
});


module.exports = { CreateBusiness, getBusinesses, getBusiness, updateBusiness, deleteBusiness, BusinessQueries, businessSearch};
