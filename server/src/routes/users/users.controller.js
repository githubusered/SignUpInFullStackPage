const { 
    addNewUser, 
  // deleteUser,
  users
} = require('../../models/users.model');

const usersSchemaValidation = require('../../models/validator.model');

async function httpGetAllUsers(req, res) {
  try {
    const result = await users.find();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}


async function generateId() {
  const r = await users.find({}, { id: true, _id: false });
  if (!r[0]) {
      return 1;
  } else {
      r.sort((a, b) => b.id - a.id);
      let newId = r[0].id + 1;
      return newId;
  }
}

async function httpAddNewUser(req, res) {
  req.body.id = await generateId() // Replace generateId() with your own logic for generating an id
  const userData = req.body
  try {

    await usersSchemaValidation.validateAsync(userData);
    await addNewUser(userData)
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
}




// async function httpDeleteUsers(req, res) {
//   const userID = req.params.id;

//   try {
//     await usersSchemaValidation.validateAsync({ id: userID });
//     const deletedUser = await User.findByIdAndDelete(userID);
//     if (!deletedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     return res.status(204).json(deletedUser);
//   } catch (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }
// }
async function httpLoginUser(req, res) {
  const { email, password } = req.body;
  console.log(email,password);
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Generate a session token or JWT and return it to the client
    // You can use a library like jsonwebtoken for JWT implementation
    const token = generateToken(user.id); // Replace with your token generation logic
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  httpGetAllUsers,
  httpAddNewUser,
  // httpDeleteUser,
  httpLoginUser,
};


