const jwt = require('jsonwebtoken');
const {
  mongo: { usersModel, workpacesModel }
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
      const userSaved = await newUser.save();
      res.json({ info: userSaved, msg: 'Account saved' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  signIn: async (req, res) => {
    const { username, password } = req.body;
    let userFound = await usersModel.findOne({ username });
    if (!userFound) return res.status(403).json({ msg: 'User not registered' });
    const isCorrectPassword = await comparePassword(
      password,
      userFound.password
    );
    if (!isCorrectPassword)
      return res.status(403).json({ msg: 'Password incorrect' });
    const token = jwt.sign(JSON.stringify(userFound), jwtSecret);
    res.json({ info: { token }, msg: 'Welcome' });
  },
  createWorkspace: async (req, res) => {
    const { name } = req.body;
    const { _id } = req.userData;

    const user = await usersModel.findOne({ _id });
    const { workspaces } = user;
    const existentWorkspace = workspaces.find(
      workspace => workspace.name === name
    );

    if (existentWorkspace)
      return res.json({ msg: `You already have a workspace named ${name}` });

    const newWorkspace = new workpacesModel({
      name,
      createdBy: _id
    });
    const workspace = await newWorkspace.save();
    await usersModel.findByIdAndUpdate(
      _id,
      {
        $push: { workspaces: workspace }
      },
      { useFindAndModify: false }
    );
    const updatedUser = await usersModel.findOne({ _id });
    res.json({ info: updatedUser, msg: 'Workspace created' });
  },
  userInfo: async (req, res) => {
    const { _id } = req.userData;
    const user = await usersModel.findOne({ _id });
    res.json({ info: user });
  }
};
