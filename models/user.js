
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class user extends Model {

    static associate(models) {
      user.hasMany(models.order);
      user.belongsToMany(models.role, { as: "roles", through: "role_id", foreignKey: "id" });
    }
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};