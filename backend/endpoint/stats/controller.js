#!/usr/bin/node
// get each stats of each business and query
const expressAsyncHandler = require('express-async-handler');
const Business = require('../../models/businessModel.js');
const Query = require('../../models/queryModel.js');
const User = require('../../models/usersModel.js')
const colors = require('colors')


const ApiStats = expressAsyncHandler(async (req, res) => {
    const user = (await User.find()).length
    const business = (await Business.find()).length
    const query = (await Query.find()).length
    const result = {
        'users': user,
        'Businesses': business,
        'Queries' : query
    }
    res.status(200) .json(result)
});

exports.ApiStats = ApiStats;
