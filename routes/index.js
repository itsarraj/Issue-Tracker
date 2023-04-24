const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController.js');

router.get('/', homeController.homepage);
router.use('/projects', require('./projects.js'));

module.exports = router;
