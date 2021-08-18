'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Famille extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Famille.init({
    niveau_socioeconomique:DataTypes.STRING,
    statut_marital:DataTypes.STRING,
    type_statut_marital:DataTypes.STRING,
    nombre_femme_pere:DataTypes.INTEGER,
    tribu:DataTypes.STRING,
    religion:DataTypes.STRING,
    posseder_radio_tele:DataTypes.BOOLEAN,
    nombre_repas:DataTypes.INTEGER,
    consommation_boisson: DataTypes.TINYINT,
    atb: DataTypes.TINYINT,
    liste_atb: DataTypes.TEXT,
    tbc_parents: DataTypes.TINYINT,
    tbc_chez: DataTypes.STRING,
    tbc_chez: DataTypes.STRING,
    tbc_gueris: DataTypes.TINYINT,
    duree_traitement_tbc: DataTypes.TINYINT,
    tbc_declarer_finie: DataTypes.TINYINT,
    nom_tuteur: DataTypes.STRING,
    type_contraception: DataTypes.STRING,
    contraception_moderne: DataTypes.STRING,
    naissance_tuteur: DataTypes.DATE,
    id_famille: DataTypes.STRING,
    taille_memage: DataTypes.INTEGER,
    age_mere: DataTypes.INTEGER,
    pere_en_vie: DataTypes.BOOLEAN,
    mere_en_vie: DataTypes.BOOLEAN,
    scolarite_mere: DataTypes.STRING,
    profession_mere: DataTypes.STRING,
    vivre_deux_parent: DataTypes.STRING,
    contraception_mere: DataTypes.STRING,
    cotraception_naturelle:DataTypes.STRING,
    profession_chef_menage: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Famille',
  });
  return Famille;
};