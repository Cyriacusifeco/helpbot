#!/usr/bin/node
/* eslint-disable */
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const fileUpload = require('express-fileupload');
const path = require('path');
const getPdfContent = require('../../config/pdfhandler').getPdfContent;
const Business = require('../../models/businessModel.js');
const fs = require('fs');
const pdf = require('pdf-parse');

const router = express.Router();

function base64DecodeFile(base64String) {
  return Buffer.from(base64String, 'base64');
}



router.post('/knowledge', expressAsyncHandler(async (req, res) => {
  if (!req.body.data) { 
    return res.status(400).send('No files were uploaded.');
  }
  if (!req.body.name) {
    return res.status(400).send('No files were uploaded.');
  }
  if(!req.body.id){
    return res.status(400).send('No Id is updated.');
  }

  const business = await Business.findById(req.body.id);
  if (!business) {
      res.status(404);
      throw new Error('business not found');
  }

  const filename = 'bot_' + business.business_name + req.body.id + '.pdf';
  const uploadedirect = path.join(__dirname, 'uploads');
  const uploadedFilePath = path.join(uploadedirect, filename); // Fixed path

  if (!fs.existsSync(uploadedirect)) {
      fs.mkdirSync(uploadedirect, { recursive: true });
  }

  console.log('Uploading file to:', uploadedFilePath);
  const buffer = base64DecodeFile(req.body.data);
  fs.writeFileSync(uploadedFilePath, buffer);

  //await uploadedFile.mv(uploadedFilePath); // Use await here

  // Read and parse the PDF content
  try {
      const data = await fs.promises.readFile(uploadedFilePath);
      const pdfData = await pdf(data);

      const pdfcontent = pdfData.text;
      console.log('PDF Content:', pdfcontent);

      const updatedItems = {
          knowledge_name: filename,
          knowledge_content: pdfcontent
      };

      const UpdatedBusiness = await Business.findByIdAndUpdate(req.body.id, { $set: updatedItems }, { new: true });
      res.status(200).json(UpdatedBusiness);
  } catch (err) {
      console.error('Error reading or processing PDF:', err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
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
  const UpdatedBusiness = await Business.findByIdAndUpdate(req.params.id, { $set: updatedItems }, { new: true })
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
