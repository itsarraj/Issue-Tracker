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
    return res.render(
        'project-detail',
        {
            title: 'Project Details',
        },
        { project, issues }
    );
};
