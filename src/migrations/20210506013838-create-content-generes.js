'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContentGeneres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genere_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Generes',
          key: 'id'
        }
      },
      content_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Content',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE
      },
      modified_at: {
        type: Sequelize.DATE
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ContentGeneres');
  }
};