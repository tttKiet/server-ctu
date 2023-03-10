"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId",
        as: "user",
      });
      User.hasMany(models.ListUser, {
        foreignKey: "userId",
        as: "userWork",
      });
    }
  }
  User.init(
    {
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      faculty: DataTypes.STRING,
      className: DataTypes.STRING,
      type: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
