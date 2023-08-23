#!/usr/bin/node
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const fileUpload = require('express-fileupload');
const path = require('path');
const getPdfContent = require('../../config/pdfhandler').getPdfContent;
const Business = require('../../models/businessModel.js');
const fs = require('fs');
const pdf = require('pdf-parse');

const router = express.Router();

router.post('/knowledge/:id', expressAsyncHandler(async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const updatedItems = {};
  const business = await Business.findById(req.params.id);
  if (!business) {
    res.status(404);
    throw new Error('business not found');
  }
  const filename = 'bot_' + business.business_name + req.params.id + '.pdf'
  updatedItems.knowledge_name = filename
  const UpdatedBusiness = await Business.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true})
  const uploadedFile = req.files.uploadedFile;
  const uploadedirect = path.join(__dirname, 'uploads');
  const uploadedFilePath = path.join(__dirname, 'uploads', filename);

  if (!fs.existsSync(uploadedirect)) {
    fs.mkdirSync(uploadedirect, { recursive: true });
  }

  console.log('Uploading file to:', uploadedFilePath);

  uploadedFile.mv(uploadedFilePath, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).send(err);
    }
  });
  //const pdfcontent = await getPdfContent(uploadedFilePath);
  // let pdfcontent = '';
  // console.log(req.params.id);
 
  // fs.readFile(uploadedFilePath, (err, data) => {
  //   if (err) {
  //     console.error('Error reading PDF:', err);
  //     res.status(404).json({ error: 'PDF not found' });
  //   }

  //   pdf(data).then((pdfData) => {
  //     pdfcontent = pdfData.text;
  //     //console.log('PDF Content:', pdfcontent);
  //   });
  // });
  res.status(200).json(UpdatedBusiness);

}));

router.post('/cac/:id', expressAsyncHandler(async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const updatedItems = {};
  const business = await Business.findById(req.params.id);
  if (!business) {
    res.status(404);
    throw new Error('business not found');
  }
  const filename = 'cac_' + business.business_name + req.params.id + '.pdf'
  updatedItems.cac_name = filename
  const UpdatedBusiness = await Business.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true})
  const uploadedFile = req.files.uploadedFile;
  const uploadedirect = path.join(__dirname, 'uploads');
  const uploadedFilePath = path.join(__dirname, 'uploads', filename);

  if (!fs.existsSync(uploadedirect)) {
    fs.mkdirSync(uploadedirect, { recursive: true });
  }

  console.log('Uploading file to:', uploadedFilePath);

  uploadedFile.mv(uploadedFilePath, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).send(err);
    }
  });
  //const pdfcontent = await getPdfContent(uploadedFilePath);
  // let pdfcontent = '';
  // console.log(req.params.id);
 
  // fs.readFile(uploadedFilePath, (err, data) => {
  //   if (err) {
  //     console.error('Error reading PDF:', err);
  //     res.status(404).json({ error: 'PDF not found' });
  //   }

  //   pdf(data).then((pdfData) => {
  //     pdfcontent = pdfData.text;
  //     //console.log('PDF Content:', pdfcontent);
  //   });
  // });
  res.status(200).json(UpdatedBusiness);

}));
module.exports = router;
