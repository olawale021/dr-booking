// adminRoutes.js
const express = require('express');
const adminController = require('../controllers/adminControllers');

const router = express.Router();

// Define routes for admins
router.post('/register_admin', adminController.registerAdmin);
// router.get('/:id', adminController.getAdminById);
// Add more routes as needed

module.exports = router;
