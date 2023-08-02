const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users'); // Import the User model

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user to the database
    const user = new User({
      name: username, // Use the destructured 'username' variable here testing
      email: email, // Use the destructured 'email' variable here testing
      password: hashedPassword, // Use the 'hashedPassword' variable here testing
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
	console.error('Error during user registration:', error);	
    res.status(500).json({ error: 'Failed to register user.' });
  }
});

module.exports = router;
