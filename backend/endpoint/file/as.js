!/usr/bin/node
// File Api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const filehandle = require('./file').filehandle

router.route('/files').post(filehandle)

module.exports = router
