// const db = require("../models");
const db = require("../utils");


const testConnection = () => {
    try {
        db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

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
    testConnection: testConnection,
    edit: edit,
    destroy:destroy
}