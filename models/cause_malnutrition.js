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
    eig: DataTypes.FLOAT,
    dpm: DataTypes.STRING,
    tbc: DataTypes.TINYINT,
    atcd_mas: DataTypes.TINYINT,
    mas_fratie: DataTypes.TINYINT,
    terme_grossesse: DataTypes.STRING,
    nombre_chute: DataTypes.INTEGER,
    sejour_neonat: DataTypes.TINYINT, 
    id_cause_malnutrition: DataTypes.INTEGER,
    lieu_accouchement: DataTypes.STRING,
    asphyxie_perinatal: DataTypes.STRING,
    calendrier_vaccinal: DataTypes.STRING,
    rang_fratie: DataTypes.STRING,
    atcd_rougeole_fratie: DataTypes.TINYINT,
    taille_fratie: DataTypes.INTEGER,
    vaccination_rougeole: DataTypes.TINYINT,
    terrain_vih: DataTypes.TINYINT,
    atcd_du_tbc_dans_fratie: DataTypes.TINYINT,
    hospitalisation_recente: DataTypes.TINYINT,
    diagnostic_hospitalisation: DataTypes.TEXT,
    cocktail_atb: DataTypes.TINYINT,
    duree_prise_atb: DataTypes.INTEGER,
    fin_allaitement: DataTypes.INTEGER,
    mois_fin_allaitement: DataTypes.INTEGER,
    diversification_aliment: DataTypes.INTEGER,
    constitution_aliment: DataTypes.TEXT,
    cause_dpm: DataTypes.TEXT,
    vaccin_non_recu: DataTypes.TEXT,
    produit_plante: DataTypes.TINYINT,
    duree_produit_plante : DataTypes.INTEGER,
    age_fin_allaitement : DataTypes.TINYINT,
    traitement_nutri : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cause_malnutrition',
  });
  return Cause_malnutrition;
};