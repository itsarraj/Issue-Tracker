const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController.js');
const issueController = require('../controllers/issueController.js');

// porject creation & form submission routes
// display the create project form
router.get('/new', projectController.createProjectFormGet);
// post/send the create project form
router.post('/new', projectController.createProjectFormPost);

// Project Details
router.get('/:id', projectController.projectDetails);

// Filter Based on Issue
router.get('/:id/issues', projectController.filterByIssueGet);

// Issue Details
// Get the page of create issue
router.get('/:id/issues/new', issueController.createIssueGet);
// Post the page of create issue form
router.post('/:id/issues/new', issueController.createIssuePost);

// router.use('/issues', require('./issues.js'));

// projects details routes

// // projects details routes
// router.get('/projects/:id', homeController.projectdetails);

module.exports = router;
