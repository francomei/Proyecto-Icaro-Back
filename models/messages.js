'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    static associate(models) {
      messages.belongsTo(models.users, {
        foreignKey: "senderId"
      })
      messages.belongsTo(models.users, {
        foreignKey: "receiverId",
        as: "destinatario"
      })
    }
  }
  messages.init({
    text: DataTypes.TEXT,
    receiverId: DataTypes.INTEGER,
    senderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};