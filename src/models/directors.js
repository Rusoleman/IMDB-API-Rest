'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directors extends Model {
    static associate(models) {
      this.belongsToMany(models.Contents,{
        through:'ContentDirectors',
        foreignKey:'director_id'
      })
    }
  };
  Directors.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dob: DataTypes.DATE,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Directors',
    tableName: 'directors',
    underscored:true
  });
  return Directors;
};