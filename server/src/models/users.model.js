const users = require('../models/users.schema');

 // Start the ID counter from 1

async function addNewUser(user) {
  try {
    await users.create(user);
    console.log('User added successfully');
  } catch (error) {
    console.log(error, 'Error adding user');
  }
}

// Add user1 as a seed

module.exports = {
  users,
  addNewUser
};
