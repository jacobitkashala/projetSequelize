'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Patient.init({

    nom_patient: DataTypes.STRING,
    prenom_patient: DataTypes.STRING,
    postnom_patient: DataTypes.STRING,
    sexe_patient: DataTypes.STRING,
    age_patient: DataTypes.INTEGER,
    provenance_patient: DataTypes.STRING,
    mode_arrive: DataTypes.STRING,
    poids_naissance: DataTypes.FLOAT,
    telephone: DataTypes.STRING,
    avatar: DataTypes.TEXT,
    adresse: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    id_Cause_malnutrition: DataTypes.INTEGER,

    id_famille: DataTypes.INTEGER,

    id_patient: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};