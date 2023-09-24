#!/usr/bin/node
/* eslint-disable no-undef */
// The users api definition
const express = require('express')
const router = express.Router()
const { createUser, getUsers, getUser, updateUser, getBusinessByUser, deleteUser, userSearch, hashPass, checkPass, genApiKey, getApikey }= require('./controller.js')

router.route('/users').get(getUsers).post(createUser)
router.route('/user/:id').get(getUser).put(updateUser).delete(deleteUser)
router.route('/users_search').post(userSearch)
router.route('/users/:user_id/businesses').get(getBusinessByUser)
router.route('/hash_passwd').get(hashPass)
router.route('/check_passwd').post(checkPass)
router.route('/gen_token').get(genApiKey)
router.route('/get_token').get(getApikey)

module.exports = router
