
const router = require('express').Router()
const patientController = require('../controllers/patientControllers');



// Define routes for patients
router.post('/register',patientController.registerPatient);
router.get('/refresh_token',patientController.refreshToken);
router.get('/patient_logout',patientController.logoutPatient);
router.get('/patient_profile',patientController.getPatient);


module.exports = router;
