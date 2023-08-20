#!/usr/bin/node
// The start api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const ApiStats = require('./controller.js').ApiStats

router.route('/stats').get(ApiStats)

module.exports = router;
