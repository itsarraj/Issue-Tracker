const Project = require('../models/Project.js');

module.exports.homepage = async function (req, res) {
    const projects = await Project.find({});
    return res.render('home', {
        title: 'Home',
        projects: projects,
    });
};

module.exports. = async function (req, res) {
    const projects = await Project.find({});
    res.render('index', { projects });

    return res.render('home', {
        title: 'Home',
        projects: projects,
    });
};
