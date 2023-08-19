#!/usr/bin/node
// The business api controller
const expressAsyncHandler = require('express-async-handler');
const User = require('../../models/usersModel.js');
const Business = require('../../models/businessModel.js');
const colors = require('colors')

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
    if (!req.body.business_name || !req.body.contact_name || !req.body.contact_email) {
        res.status(400);
        throw new Error('Please Enter a business name, contact name, or a contact email');
    }
    const business  = await Business.create({ business_name: req.body.business_name, 
        contact_name: req.body.contact_name, contact_email: req.body.contact_email, user_id: req.body.user_id });
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
    if (req.body.contact_name) {
        updatedItems.contact_name = req.body.contact_name;
    }
    if (req.body.contact_email) {
        updatedItems.contact_email = req.body.contact_email;
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

module.exports = { CreateBusiness, getBusinesses, getBusiness, updateBusiness, deleteBusiness};
