const db = require('../utils');
const Family = require("../models/family");


function All(req, res) {
    res.send('All todos')
}

function viewOne(req, res) {
    console.log('Viewing ' + req.params.id);
}

function create(req, res) {
    console.log('Todo created')
}

function destroy(req, res) {
    console.log('Todo deleted')
}

function edit(req, res) {
    console.log('Todo ' + req.params.id + ' updated')
}

module.exports = {
    edit: edit,
    destroy:destroy
}