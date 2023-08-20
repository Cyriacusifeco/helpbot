const fs = require('fs');
const pdf = require('pdf-parse');

async function getPdfContent(pdfFilePath) {
  try {
    // Read the PDF file
    const dataBuffer = fs.readFileSync(pdfFilePath);

    // Parse the PDF and extract text content
    const data = await pdf(dataBuffer);

    // Extracted text content
    const pdfContent = data.text;

    return pdfContent;
  } catch (error) {
    console.error('Error reading PDF:', error.message);
    return null;
  }
}

// Usage
const pdfFilePath = 'path/to/your/pdf/file.pdf';
getPdfContent(pdfFilePath)
  .then(content => {
    if (content) {
      console.log('PDF Content:', content);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
