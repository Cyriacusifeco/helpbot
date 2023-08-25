#!/usr/bin/node
// The users api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { createUser, getUsers, getUser, updateUser, getBusinessByUser, deleteUser, userSearch }= require('./controller.js')

router.route('/users').get(getUsers).post(createUser)
router.route('/user/:id').get(getUser).put(updateUser).delete(deleteUser)
router.route('/users_search').get(userSearch)
router.route('/users/:user_id/businesses').get(getBusinessByUser)

module.exports = router
