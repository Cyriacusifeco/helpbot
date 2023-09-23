#!/usr/bin/node
/* eslint-disable no-undef */
// The users api controller
const expressAsyncHandler = require('express-async-handler');
const User = require('../.../../../models/usersModel.js');
const Business = require('../../models/businessModel.js');
const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds=10)
    console.log('Salt: ', salt)
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (plainPassword, hashedPassword) => {
    try {
      const match = await bcrypt.compare(plainPassword, hashedPassword);
      return match;
    } catch (error) {
      console.error('Error comparing passwords:', error);
      return false;
    }
};

const createUser = expressAsyncHandler(async (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400);
        throw new Error('Please Enter a username or password');
    }
    const password = req.body.password
    const hashpassword = await hashPassword(password);
    console.log(`hashed password: ${hashpassword}`.rainbow)
    const user  = await User.create({ username: req.body.username, 
        password: hashpassword, email: req.body.email });
    res.status(201).json(user);
});

const getUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
});

const getUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('user not found');
    } 
    res.status(200).json(user);
});

const updateUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    const updatedItems = {};
    if (req.body.username) {
        updatedItems.username = req.body.username;
    }
    if (req.body.email) {
        updatedItems.email = req.body.email;
    }
    if (req.body.password) {
        const pass = req.body.password;
        const hashpassword = await hashPassword(pass);
        updatedItems.password = hashpassword;
    }
    await User.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true})
    const newUser = await User.findById(req.params.id);
    res.status(200).json(newUser);
});

const deleteUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('user not found');
    }
    
    const holder = await User.deleteOne({_id: req.params.id});
    holder ? res.status(200).json(user): res.status(404).json({message: 'user not deleted'});
});


const getBusinessByUser = expressAsyncHandler(async (req, res) => {
    //Get all Businesses of a user
    const business = await Business.find({user_id: req.params.user_id});
    console.log(business)
    if (!business) {
        res.status(404);
        throw new Error('business not found');
    } 
    res.status(200).json(business);
});

const userSearch = expressAsyncHandler(async (req, res) => {
    try {
      if (!req.body) throw new Error('Please provide search criteria.');
  
      const search = {email: req.body.email}
  
      const users = await User.find(search);
  
      if (!users.length) throw new Error('No users found matching the search criteria.');
  
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

const hashPass = expressAsyncHandler(async (req, res) => {
    try {
        const password = req.body.password
        const hashpassword = await hashPassword(password);
        const object = {password: hashpassword }
        res.status(200).json(object)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

const checkPass = expressAsyncHandler(async (req, res) => {
    const result = await comparePassword(req.body.password, req.body.hashpassword);
    res.status(200).json({matches: result})
});

const genApiKey = expressAsyncHandler(async (req, res) => {
    if (!req.body.user_id) {
        res.status(400);
        throw new Error('Please Enter a user_id');
    }
    const user = await User.findById(req.body.user_id);
    if (!user) {
        res.status(404);
        throw new Error('user not found');
    }
    const api_key = 'hpb_' + uuidv4();
    await User.findByIdAndUpdate(req.body.user_id, { $set: {api_key: api_key} }, { new: true});
    res.status(200).json({api_key: api_key});
});

const getApikey = expressAsyncHandler(async (req, res) => {
    if (!req.body.user_id) {
        res.status(400);
        throw new Error('Please Enter a user_id');
    }
    const user = await User.findById(req.body.user_id);
    if (!user) {
        res.status(404);
        throw new Error('user not found');
    }
    api_key = user.api_key;
    res.status(200).json({api_key: api_key});
})
module.exports = { createUser, getUsers, getUser, updateUser, deleteUser, getBusinessByUser, checkPass, userSearch, hashPass, genApiKey, getApikey};
