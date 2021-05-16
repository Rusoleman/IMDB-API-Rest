'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentActors extends Model {
    static associate(models) {
      this.belongsTo(models.Actors,{
        foreignKey:'actor_id'
      });
      this.belongsTo(models.Contents,{
        foreignKey:'content_id'
      })
    }
  };
  ContentActors.init({
    actor_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentActors',
    tableName: 'content_directors'
  });
  return ContentActors;
};