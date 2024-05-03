// adminRoutes.js
const router = require('express').Router()
const adminController = require('../controllers/adminControllers');



// Define routes for admins
router.post('/admin_register',adminController.registerAdmin);
// router.get('/:id', adminController.getAdminById);
// Add more routes as needed

module.exports = router;
