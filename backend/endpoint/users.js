const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { createUser, getUsers, getUser, updateUser, deleteUser }= require('./controller.js')

router.route('/users').get(getUsers).post(createUser)
router.route('/users/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
