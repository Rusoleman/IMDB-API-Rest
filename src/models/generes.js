'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generes extends Model {
    static associate(models) {
      this.belongsToMany(models.Contents,{
        through:'content_genres',
        foreignKey:'genere_id'
      });
    }
  };
  Generes.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Generes',
    tableName: 'generes'
  });
  return Generes;
};