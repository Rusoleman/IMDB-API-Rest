'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentGeneres extends Model {
    static associate(models) {
      this.belongsTo(models.Generes,{
        foreignKey:'id'
      });
      this.hasMany(models.Contents,{
        foreignKey:'id'
      });
    }
  };
  ContentGeneres.init({
    genere_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentGeneres',
    tableName: 'content_generes'
  });
  return ContentGeneres;
};