const express = require('express');
//const router = express.Router();
const db = require("../utils/connexion");

const { Sequelize } = require('sequelize');
const saveFamille=require('../controller/controllerFamille');

const router=(app)=>{
    app.get('/', (req, res) => {
        try {
            db.authenticate();
           console.log('Connection has been established successfully.');
       } catch (error) {
           console.error('Unable to connect to the database:', error);
       }
        res.send({ message: "bien" });
    })
}


module.exports = router;