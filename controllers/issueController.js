const Project = require('../models/Project.js');
const Issue = require('../models/Issue.js');

module.exports.createIssueGet = async function (req, res) {
    const project = await Project.findById(req.params.id);
    const issues = await Issue.find({ projectId: req.params.id });

    return res.render('create-issue', {
        title: 'Create Issue',
        project,
        issues,
    });
};
module.exports.createIssuePost = async function (req, res) {
    // const { labelInput } = req.body;
    // console.log(labelInput);
    // if (!req.body.labels) {
    //     req.body.labels = [];
    // }

    // req.body.labels.push(labelInput);
    const issue = new Issue(req.body);
    const projectId = req.params.id;
    issue.projectId = projectId;

    try {
        await issue.save();
        res.redirect(`/projects/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.redirect(`/projects/${req.params.id}/issues/new`);
    }
};

// I;
// // import necessary modules and models
// const express = require('express');
// const router = express.Router();
// const Project = require('../models/project');
// const Issue = require('../models/issue');

// // Route to display a list of projects on the home page
// router.get('/', async (req, res) => {
//     const projects = await Project.find({});
//     res.render('index', { projects });
// });

// // Route to display the create project form
// router.get('/projects/new', (req, res) => {
//     res.render('projects/new');
// });

// // Route to handle creating a new project
// router.post('/projects', async (req, res) => {
//     const project = new Project(req.body);
//     try {
//         await project.save();
//         res.redirect('/');
//     } catch (err) {
//         console.log(err);
//         res.redirect('/projects/new');
//     }
// });

// // Route to display a specific project and its issues
// router.get('/projects/:id', async (req, res) => {
//     const project = await Project.findById(req.params.id);
//     const issues = await Issue.find({ projectId: req.params.id });
//     res.render('projects/show', { project, issues });
// });

// // Route to display the create issue form for a project
// router.get('/projects/:id/issues/new', async (req, res) => {
//     const project = await Project.findById(req.params.id);
//     res.render('issues/new', { project });
// });

// // Route to handle creating a new issue for a project
// router.post('/projects/:id/issues', async (req, res) => {
//     const issue = new Issue(req.body);
//     try {
//         await issue.save();
//         res.redirect(`/projects/${req.params.id}`);
//     } catch (err) {
//         console.log(err);
//         res.redirect(`/projects/${req.params.id}/issues/new`);
//     }
// });

// // Route to handle filtering issues by labels, author, and search query
// router.get('/projects/:id/issues', async (req, res) => {
//     const project = await Project.findById(req.params.id);
//     const { labels, author, search } = req.query;
//     let query = { projectId: req.params.id };
//     if (labels) {
//         const labelArray = labels.split(',');
//         query.labels = { $in: labelArray };
//     }
//     if (author) {
//         query.author = author;
//     }
//     if (search) {
//         const searchRegex = new RegExp(search, 'i');
//         query.$or = [{ title: searchRegex }, { description: searchRegex }];
//     }
//     const issues = await Issue.find(query);
//     res.render('issues/index', { project, issues, labels, author, search });
// });

// // export the router
// module.exports = router;
