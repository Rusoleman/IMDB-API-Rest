'use strict';

const today = new Date();

const actors =[
  {
  firstName: 'Dwayne',
  lastname: 'Johnson',
  dob:'',
  biography:'',
  profile_photo:"",
  active: true,
  created_at: today,
  updated_at: today
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
    await queryInterface.bulkInsert('actors',actors,{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('actors', null, {});
  }
};
