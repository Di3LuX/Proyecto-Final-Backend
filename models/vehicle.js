
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class vehicle extends Model {

    static associate(models) {
      vehicle.belongsTo(models.articles)
    }
  };
  vehicle.init({
    article_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    photo: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    manufacturing: DataTypes.DATEONLY,
    registration: DataTypes.STRING,
    conditions: DataTypes.STRING,
    info: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};