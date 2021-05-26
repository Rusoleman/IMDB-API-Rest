'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentDirectors extends Model {
    static associate(models) {
      this.hasMany(models.Directors,{
        foreignKey:'id'
      });
      this.hasMany(models.Contents,{
        foreignKey:'content_id'
      });
    }
  };
  ContentDirectors.init({
    director_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentDirectors',
    tableName: 'content_directors'
  });
  return ContentDirectors;
};