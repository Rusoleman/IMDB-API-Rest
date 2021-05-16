'use strict';

const today = new Date();

const directors = [
  {
    firstName: 'Dwayne',
    lastname: 'Johnson',
    dob:'',
    biography:'',
    profile_photo:"",
    active: true,
    created_at: today,
    modified_at: today
  },
  {
    firstName: 'Dwayne',
    lastname: 'Johnson',
    dob:'',
    biography:'',
    profile_photo:"",
    active: true,
    created_at: today,
    modified_at: today
  }
  ,
  {
    firstName: 'Dwayne',
    lastname: 'Johnson',
    dob:'',
    biography:'',
    profile_photo:"",
    active: true,
    created_at: today,
    modified_at: today
  },
  {
    firstName: 'Dwayne',
    lastname: 'Johnson',
    dob:'',
    biography:'',
    profile_photo:"",
    active: true,
    created_at: today,
    modified_at: today
  },
  {
    firstName: 'Dwayne',
    lastname: 'Johnson',
    dob:'',
    biography:'',
    profile_photo:"",
    active: true,
    created_at: today,
    modified_at: today
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('directors',directors ,{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('directors', null, {});
  }
};
