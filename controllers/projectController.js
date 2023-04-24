const Project = require('../models/Project.js');
const Issue = require('../models/Issue.js');

module.exports.createProjectForm = async function (req, res) {
    const projects = await Project.find({});
    return res.render('create-project', {
        title: 'Create Project',
    });
};

module.exports.createProjectPostForm = async function (req, res) {
    const project = new Project(req.body);
    try {
        await project.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/projects/new');
    }
};
