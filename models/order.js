
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

    user_id: {
      type: DataTypes.INTEGER,
      
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      
    },

    artilce_id: {
      type: DataTypes.INTEGER,
      
        references: {
          model: 'articles',
          key: 'id'
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