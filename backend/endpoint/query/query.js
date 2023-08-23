#!/usr/bin/node
// The query api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { CreateQuery, getQueries, getQuery, updateQuery, deleteQuery } = require('./controller.js')

router.route('/queries').get(getQueries).post(CreateQuery)
router.route('/query/:id').get(getQuery).put(updateQuery).delete(deleteQuery)

module.exports = router
