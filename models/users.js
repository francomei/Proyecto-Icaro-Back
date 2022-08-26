'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.messages, {
        foreignKey: "senderId",
        as: "msgSended"
      })
      users.hasMany(models.messages, {
        foreignKey: "receiverId",
        as: "msgReceived"
      })
    }
  }
  users.init({
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};