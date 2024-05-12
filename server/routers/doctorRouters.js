const express = require('express');
const router = express.Router();
const doctorControllers = require('../controllers/doctorControllers');

// Define routes for doctor
router.post('/register', doctorControllers.registerDoctor);
router.post('/doctor_login', doctorControllers.doctorLogin);
router.post('/doctor_logout', doctorControllers.logoutDoctor);
router.get('/refresh_token', doctorControllers.refreshToken);
router.get('/doctor_profile', doctorControllers.getDoctor);

module.exports = router;
