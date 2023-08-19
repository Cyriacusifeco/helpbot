#!/usr/bin/node
// The business api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { CreateBusiness, getBusinesses, getBusiness, updateBusiness } = require('./controller.js')

router.route('/businesses').get(getBusinesses);
router.route('/business/register').post(CreateBusiness);
router.route('/business/:id').get(getBusiness).put(updateBusiness);

module.exports = router