const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController.js');

// porject creation & form submission routes
// display the create project form
router.get('/new', projectController.createProjectFormGet);
// post/send the create project form
router.post('/new', projectController.createProjectFormPost);

// Project Details
router.use('/:id', projectController.projectDetails);

router.use('/:id/issues', require('./issues.js'));
router.use('/issues', require('./issues.js'));

// projects details routes

// // projects details routes
// router.get('/projects/:id', homeController.projectdetails);

module.exports = router;
