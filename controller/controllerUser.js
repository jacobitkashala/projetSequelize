// const db = require("../models");
const db = require("../utils");
const { QueryTypes } = require('sequelize');

const modelUser= require("../models");

async function allUser(req, res) {


    res.status(200).send({ message: "ok" })
    db.
        sync({ force: true })
        .then((result) => {
           return modelUser.create({ id_user: 2,
             prenom_user: "kashala",
              nom_user: "jaco",
               postnom_user: "mukendi",
                email: "mukendi@gmail.com", 
                password: "1234", 
                status: "medecin",
                 avatar: "avatar" })
        }).then(user=>{
            console.log("fist user",user);
        }).catch((err)=>{console.log(err)})
}

function viewOneUser(req, res) {
    console.log('Viewing ' + req.params.id);
}

function createUser(req, res) {
    console.log('Todo created')
}

function destroyUser(req, res) {
    console.log('Todo deleted')
}

function editUSer(req, res) {
    console.log('Todo ' + req.params.id + ' updated')
}

module.exports = {
    editUSer: editUSer,
    allUser: allUser,
    viewOneUser: viewOneUser,
    destroyUser: destroyUser,
    createUser: createUser


}