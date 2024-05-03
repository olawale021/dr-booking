const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

const registerAdmin = async (req, res) => {
    try {
        // Extract admin details from request body
        const { username, password } = req.body;

        // Check if the username is already taken
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin instance
        const newAdmin = new Admin({
            username,
            password: hashedPassword
            // Add other admin details if needed
        });

        // Save the admin to the database
        await newAdmin.save();

        // Return success response
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


const adminLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username exists in the database
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, admin.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If the username and password are correct, generate a JWT token
        const token = jwt.sign({ username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the token to the client
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Define other controller functions as needed

module.exports = {
    registerAdmin,
    adminLogin,
    // Add more controller functions as needed
};
