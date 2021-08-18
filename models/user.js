'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id_user: DataTypes.STRING,
    prenom_user: DataTypes.STRING,
    nom_user: DataTypes.STRING,
    postnom_user: DataTypes.STRING,
    email_user: DataTypes.STRING,
    password_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};