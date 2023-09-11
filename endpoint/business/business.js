#!/usr/bin/node
// The business api definition
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { CreateBusiness, getBusinesses, getBusiness, updateBusiness, deleteBusiness, BusinessQueries, businessSearch } = require('./controller.js')

router.route('/businesses').get(getBusinesses);
router.route('/business/register').post(CreateBusiness);
router.route('/business/:id').get(getBusiness).put(updateBusiness).delete(deleteBusiness);
router.route('/businesses_search').get(businessSearch);
router.route('/business/:business_id/queries').get(BusinessQueries);

module.exports = router
