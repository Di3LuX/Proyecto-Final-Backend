
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class order extends Model {

    static associate(models) {
      order.belongsTo(models.user);
    }
  }
  order.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date_of_order: DataTypes.DATE,

    userIdUser: {
      type: DataTypes.INTEGER,
      
        references: {
          model: 'users',
          key: 'id_user'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      
    }
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};