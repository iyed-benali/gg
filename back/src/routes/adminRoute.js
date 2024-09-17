const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to get all orders with details
router.post('/admin', adminController.addAdmin);
router.get('/get',adminController.getAll)
router.delete('/delete/:id',adminController.deleteAdmin);
module.exports = router;
router.patch('/update/:id',adminController.update)