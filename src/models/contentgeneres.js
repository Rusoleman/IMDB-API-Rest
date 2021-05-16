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
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentGeneres',
    tableName: 'content_generes'
  });
  return ContentGeneres;
};