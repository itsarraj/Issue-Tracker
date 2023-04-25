const Project = require('../models/Project.js');
const Issue = require('../models/Issue.js');

module.exports.createProjectFormGet = async function (req, res) {
    const projects = await Project.find({});
    return res.render('create-project', {
        title: 'Create Project',
    });
};

module.exports.createProjectFormPost = async function (req, res) {
    const project = new Project(req.body);
    try {
        await project.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/projects/new');
    }
};

module.exports.projectDetails = async function (req, res) {
    const project = await Project.findById(req.params.id);
    const issues = await Issue.find({ projectId: req.params.id });
    return res.render('project-detail', {
        title: 'Project Details',
        project,
        issues,
    });
};

module.exports.filterByIssueGet = async function (req, res) {
    const project = await Project.findById(req.params.id);
    const issues = await Issue.find({ projectId: req.params.id });
    console.log('req.query ', req.query);
    const projectId = req.params.id;
    const { author, searchTitle, searchDescription, labels } = req.query;

    const query = { projectId: projectId };

    if (author) {
        query.author = author;
    }

    if (searchTitle) {
        query.title = { $regex: searchTitle, $options: 'i' };
    }

    if (searchDescription) {
        query.description = { $regex: searchDescription, $options: 'i' };
    }

    if (labels) {
        // const labelArray = labels.split(',');
        const labelArray = Array.isArray(labels) ? labels.join(',') : labels;
        query.labels = { $in: labelArray };
    }
    console.log('query', query);

    let issuesFiltered = await Issue.find(query);
    console.log('issuesFiltered', issuesFiltered);
    return res.render('project-detail', {
        title: 'Project Details',
        project: { _id: projectId },
        issues: issuesFiltered,
    });
};
