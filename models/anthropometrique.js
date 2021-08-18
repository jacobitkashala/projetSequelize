'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anthropometrique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  anthropometrique.init({
    id_anthro: DataTypes.STRING,
    peri_craninen: DataTypes.FLOAT,
    peri_brachail: DataTypes.FLOAT,
    poids: DataTypes.FLOAT,
    taille: DataTypes.FLOAT,
    type_malnutrition: DataTypes.STRING,
    date_examen: DataTypes.DATE,
    id_patient: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'anthropometrique',
  });
  return anthropometrique;
};