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
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Generes',
    tableName: 'generes'
  });
  return Generes;
};