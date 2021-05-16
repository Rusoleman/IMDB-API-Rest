'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    static associate(models) {
      this.belongsToMany(models.Actors,{
        through:'content_actors',
        foreignKey:'content_id'
      });
      this.belongsToMany(models.Directors,{
        through:'content_directors',
        foreignKey:'content_id'
      });
      this.belongsToMany(models.Generes,{
        through:'content_generes',
        foreignKey:'content_id'
      });
    }
  };
  Contents.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    total_seasons: DataTypes.INTEGER,
    imdb_score: DataTypes.NUMERIC,
    realease_date: DataTypes.STRING,
    play_time: DataTypes.INTEGER,
    imdb_link: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Contents',
    tableName: 'contents'
  });
  return Contents;
};