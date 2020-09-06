const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/tasks');
const validateAuth = require('../middlewares/validateAuth');

router.put('/', validateAuth, createTask);

module.exports = router;
