
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class various extends Model {

    static associate(models) {
      various.belongsTo(models.articles)
    }
  };
  various.init({
    type: DataTypes.STRING,
    photo: DataTypes.STRING,
    brand: DataTypes.STRING,
    conditions: DataTypes.STRING,
    info: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'various',
  });
  return various;
};