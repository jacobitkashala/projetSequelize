'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('anthropometriques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peri_craninen: {
        type: Sequelize.FLOAT
      },
      peri_brachail: {
        type: Sequelize.FLOAT
      },
      poids: {
        type: Sequelize.FLOAT
      },
      taille: {
        type: Sequelize.FLOAT
      },
      type_malnutrition: {
        type: Sequelize.STRING
      },
      date_examen: {
        type: Sequelize.DATE
      },
      id_patien: {
        type: Sequelize.STRING
      },
      id_anthro: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('anthropometriques');
  }
};