const express = require('express');
const router = express.Router();
const { getOne } = require('../controllers/workspace');
const validateAuth = require('../middlewares/validateAuth');

router.get('/', validateAuth, getOne);

module.exports = router;
