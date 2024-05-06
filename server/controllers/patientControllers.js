const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');


const refreshToken = async (req, res)=> {
    try {
        const rf_token = req.cookies.refreshToken;
        if(!rf_token) return res.status(400).json({msg: 'Please Login or Register'})

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET,(err, patient)=>{
            if(err) return res.status(400).json({msg: 'Login OR Register Now'})
            const accessToken = createAccessToken({id: patient.id})
            return res.json({accessToken})
        })
        } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

const createAccessToken = (patient) => {
    return jwt.sign(patient, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (patient) => {
    return jwt.sign(patient, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

const registerPatient = async (req, res) => {
    try {
        // Extract patient details from request body
        const {   firstName, lastName, password, dateOfBirth, gender, phoneNumber, address } = req.body;

        // Check if the username is already taken
        const existingPatient = await Patient.findOne({ phoneNumber: phoneNumber});
        if (existingPatient) {
            return res.status(400).json({ message: 'Phone number is already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new patient instance
        const newPatient = new Patient({
            firstName,
            lastName,
            password: hashedPassword,
            dateOfBirth,
            gender,
            phoneNumber,
            address: {
                street: address.street,
                city: address.city,
                state: address.state,
                postcode: address.postcode
            }
        });

        // Save the patient to the database
        await newPatient.save();

         // Generate access and refresh tokens for the new patient
        const accessToken = createAccessToken({id: newPatient._id})
            const refreshToken = createRefreshToken({id: newPatient._id})

            // Set the refresh token as an HTTP-only cookie
            res.cookie('refreshToken' , refreshToken, {
                httpOnly: true,
                path: '/patient/refresh_token'
            })

        // Return success response
        return res.json({accessToken})
    } catch (error) {
        console.error('Error registering patient:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const patientLogin = async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        // Check if the username exists in the database
        const patient = await Patient.findOne({ phoneNumber });

        if (!patient) {
            return res.status(401).json({ message: 'Invalid phone number or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, patient.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid phone number or password' });
        }

        // If the username and password are correct, generate a JWT token
        const accessToken = createAccessToken({id: patient._id})
            const refreshToken = createRefreshToken({id: patient._id})

             // Set the refresh token as an HTTP-only cookie
            res.cookie('refreshToken' , refreshToken, {
                httpOnly: true,
                path: '/patient/refresh_token'
            })

        // Return the token to the client
        res.status(200).json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const logoutPatient = async (req, res) => {
    try {
        // Clear the refresh token cookie from the client
        res.clearCookie('refreshToken', { path: '/patient/refresh_token' });

        // Return success message
        res.json({ message: 'Patient logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getPatient = async (req, res) => {
    try {
        // Find the patient by ID and exclude the password field from the query result
        const patient = await Patient.findById(req.patient.id).select('-password');

        // Check if the patient exists
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        // Return the patient data
        res.json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = {
    registerPatient,
    patientLogin,
    refreshToken,
    logoutPatient,
    getPatient,
};
