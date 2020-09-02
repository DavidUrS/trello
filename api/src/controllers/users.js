const jwt = require('jsonwebtoken');
const {
  mongo: { usersModel }
} = require('../../databases');
const {
  bcryptHelpers: { encryptPassword, comparePassword }
} = require('../../helpers');
const { jwtSecret } = require('../../config');

module.exports = {
  signUp: async (req, res) => {
    try {
      const { username, password } = req.body;
      const encryptedPassword = await encryptPassword(password);
      const newUser = new usersModel({ username, password: encryptedPassword });
      await newUser.save();
      res.json({ msg: `${newUser.username} registered` });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  signIn: async (req, res) => {
    const { username, password } = req.body;
    const userFound = await usersModel.findOne({ username });
    if (!userFound) return res.status(403).json({ msg: 'User not registered' });
    const isCorrectPassword = await comparePassword(
      password,
      userFound.password
    );
    if (!isCorrectPassword)
      return res.status(403).json({ msg: 'Password incorrect' });
    const token = jwt.sign(JSON.stringify(userFound), jwtSecret);
    res.json({ message: `${userFound.username} welcome`, token });
  }
};
