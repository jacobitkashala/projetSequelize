const Sequelize = require('sequelize');
const sequelize = require('../utils');

const Family = sequelize.define('user', {
    id_famille: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    taille_menage: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    , vivre_deux_parent: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    mere_enceinte: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pere_en_vie: {
        type: Sequelize.BOOLEAN,
        allowNull: false

    },
    mere_en_vie: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    profession_mere: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profession_chef_menage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_mere: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    age_mere: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    scolarite_mere: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contraception_mere: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contraception_naturelle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    niveau_socioeconomique: {
        type: Sequelize.STRING,
        allowNull: false
    },
    statut_marital: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nombre_femme_pere: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tribu: {
        type: Sequelize.STRING,
        allowNull: false
    },
    religion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    posseder_radio_tele: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nombre_repas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    consommation_boisson: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    atb: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    list_atb: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tbc_parent: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    tbc_chez: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tbc_gueris: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    dure_traitement_tbc: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tbc_declarer_finie: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nom_tuteur: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports = Family;