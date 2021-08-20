const Sequelize = require('sequelize');
const sequelize = require('../utils');

const User = sequelize.define('user', {
    id_user: {
        type: Sequelize.UUIDV4,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    avatar: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    , email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    postnom_user: {
        type: Sequelize.STRING
    },
    prenom_user: {
        type: Sequelize.STRING
    },
    nom_user: {
        type: Sequelize.STRING
    },
})
module.exports=User;  