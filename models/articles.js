
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {

    static associate(models) {
      articles.hasOne(models.vehicle)
      articles.hasOne(models.estate)
      articles.hasOne(models.various)
      // articles.hasMany(models.order)

    }
  }
  articles.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
    {
      sequelize,
      modelName: 'articles',
    });
  return articles;
};