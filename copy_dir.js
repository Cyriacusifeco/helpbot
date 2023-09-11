const fs = require('fs-extra');

// Define the source subdirectory and the destination directory (CWD)
const sourceDirectory = './backend';
const destinationDirectory = '.';

// Use copySync to copy the contents
try {
  fs.copySync(sourceDirectory, destinationDirectory);
  console.log('Contents copied successfully.');
} catch (err) {
  console.error('Error copying contents:', err);
}
