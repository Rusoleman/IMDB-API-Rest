'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      this.belongsToMany(models.Contents, {
        through:'ContentActors',
        foreignKey:"actor_id"
      });
    }
  };
  Actors.init({
    firstname: {
     type: DataTypes.STRING,
     validate:{
       notEmpty: true,
       isAlpha: true
     }
    },
    lastname: DataTypes.STRING,
    dob: DataTypes.DATE,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Actors',
    tableName: 'actors'
  });
  return Actors;
};