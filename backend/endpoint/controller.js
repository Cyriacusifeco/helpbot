const expressAsyncHandler = require('express-async-handler');
const User = require('../models/usersModel.js');
const bcrypt = require("bcrypt")
const colors = require('colors')

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds=10)
    console.log('Salt: ', salt)
    return await bcrypt.hash(password, salt)
}

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
    console.log(user);
    res.status(201).json(user);
});

const getUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    console.log(`${users}`.cyan.underline);
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
    const UpdatedUser = await User.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true})
    const newUser = await User.findById(req.params.id);
    res.status(200).json(newUser);
});

const deleteUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('user not found');
    }
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.json(deleteUser);
});

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
