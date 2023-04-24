const express = require('express');
const router = express.Router();

const issueController = require('../controllers/issueController.js');
// Get the page of create issue
router.get('/new', issueController.createIssueGet);
// Post the page of create issue form
router.post('/new', issueController.createIssuePost);

module.exports = router;
