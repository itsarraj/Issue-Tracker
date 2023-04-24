const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController.js');

router.use('/', require('./issues.js'));

// porject creation & form submission routes
// display the create project form
router.get('/new', projectController.createProjectForm);
// post/send the create project form
router.post('/new', projectController.createProjectPostForm);

// projects details routes
// router.get('/projects/:id', homeController.projectdetails);

// // projects details routes
// router.get('/projects/:id', homeController.projectdetails);

module.exports = router;
