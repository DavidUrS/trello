const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/user');
const validate = require('../middlewares/validateData');
const {
  signIn,
  signUp,
  createWorkspace,
  userInfo
} = require('../controllers/users');
const validateAuth = require('../middlewares/validateAuth');

router.post('/signup', validate(userSchema), signUp);
router.post('/signin', validate(userSchema), signIn);
router.put('/createWorkspace', validateAuth, createWorkspace);
router.get('/userInfo', validateAuth, userInfo);

module.exports = router;
