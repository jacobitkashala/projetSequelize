'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cause_malnutrition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cause_malnutrition.init({
    id_cause: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cause_malnutrition',
  });
  return Cause_malnutrition;
};