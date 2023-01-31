
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class object extends Model {

    static associate(models) {
      object.belongsTo(models.articles)
    }
  };
  object.init({
    article_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    photo: DataTypes.STRING,
    brand: DataTypes.STRING,
    conditions: DataTypes.STRING,
    info: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'object',
  });
  return object;
};