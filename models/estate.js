
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class estate extends Model {

    static associate(models) {
      estate.belongsTo(models.articles, {
        foreignKey: 'article_id'
      })
    }
  };
  estate.init({
    type: DataTypes.STRING,
    photo: DataTypes.STRING,
    location: DataTypes.STRING,
    surface: DataTypes.INTEGER,
    conditions: DataTypes.STRING,
    info: DataTypes.TEXT,
  },
    {
      sequelize,
      modelName: 'estate',
    });
  return estate;
};