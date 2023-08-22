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

router.post('/upload/:id', expressAsyncHandler(async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const uploadedFile = req.files.uploadedFile;
  uploadedirect = path.join(__dirname, 'uploads');
  const uploadedFilePath = path.join(__dirname, 'uploads', uploadedFile.name);

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
  let pdfcontent = '';
  console.log(req.params.id);
  const business = await Business.findById(req.params.id);
  if (!business) {
    res.status(404);
    throw new Error('business not found');
  }
  fs.readFile(uploadedFilePath, (err, data) => {
    if (err) {
      console.error('Error reading PDF:', err);
      res.status(404).json({ error: 'PDF not found' });
    }

    pdf(data).then((pdfData) => {
      pdfcontent = pdfData.text;
      //console.log('PDF Content:', pdfcontent);
    });
  });
  const updatedItems = { "knowledge_base": pdfcontent };
  const UpdatedBusiness = await Business.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true })
  const newBusiness = await Business.findById(req.params.id);
  res.status(200).json(newBusiness);

}));

module.exports = router;
