const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctorModel');

const refreshToken = async (req, res)=> {
    try {
        // Extract the refresh token from the request cookies
        const rf_token = req.cookies.refreshToken;
        
        // Check if the refresh token exists
        if(!rf_token) return res.status(400).json({msg: 'Please Login or Register'})

        // Verify the refresh token and extract doctor information
        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET,(err, doctor)=>{
            // Handle verification errors
            if(err) return res.status(400).json({msg: 'Login OR Register Now'})
            
            // Generate a new access token using doctor information
            const accessToken = createAccessToken({id: doctor.id})
            
            // Return the new access token to the client
            return res.json({accessToken})
        })
    } catch (err) {
        // Handle server errors
        return res.status(500).json({msg: err.message})
    }
};

// Function to generate a new access token
const createAccessToken = (doctor) => {
    return jwt.sign(doctor, process.env.JWT_SECRET, {expiresIn: '1d'})
}

// Function to generate a new refresh token
const createRefreshToken = (doctor) => {
    return jwt.sign(doctor, process.env.JWT_SECRET, {expiresIn: '7d'})
}

const registerDoctor = async (req, res) => {
    try {
        // Extract doctor details from request body
        const { username, firstName, lastName, password, phoneNumber, specialty, hospitalAddress } = req.body;

        // Check if the phone number is already registered
        const existingDoctor = await Doctor.findOne({ phoneNumber });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Phone number is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new doctor instance
        const newDoctor = new Doctor({
            username,
            firstName,
            lastName,
            password: hashedPassword,
            phoneNumber,
            specialty,
            hospitalAddress
        });

        // Save the doctor to the database
        await newDoctor.save();

        // Generate access and refresh tokens for the new doctor
        const accessToken = createAccessToken({id: newDoctor._id})
        const refreshToken = createRefreshToken({id: newDoctor._id})

        // Set the refresh token as an HTTP-only cookie
        res.cookie('refreshToken' , refreshToken, {
            httpOnly: true,
            path: '/doctor/refresh_token'
        })

        // Return success response
        return res.json({accessToken})
    } catch (error) {
        console.error('Error registering doctor:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const doctorLogin = async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        // Check if the phone number is registered
        const doctor = await Doctor.findOne({ phoneNumber });

        if (!doctor) {
            return res.status(401).json({ message: 'Invalid phone number or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, doctor.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid phone number or password' });
        }

        // If the phone number and password are correct, generate a JWT token
        const accessToken = createAccessToken({id: doctor._id})
        const refreshToken = createRefreshToken({id: doctor._id})

        // Set the refresh token as an HTTP-only cookie
        res.cookie('refreshToken' , refreshToken, {
            httpOnly: true,
            path: '/doctor/refresh_token'
        })

        // Return the token to the client
        res.status(200).json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const logoutDoctor = async (req, res) => {
    try {
        // Clear the refresh token cookie from the client
        res.clearCookie('refreshToken', { path: '/doctor/refresh_token' });

        // Return success message
        res.json({ message: 'Doctor logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getDoctor = async (req, res) => {
    try {
        // Find the doctor by ID and exclude the password field from the query result
        const doctor = await Doctor.findById(req.doctor.id).select('-password');

        // Check if the doctor exists
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        // Return the doctor data
        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerDoctor,
    doctorLogin,
    refreshToken,
    logoutDoctor,
    getDoctor,
};
