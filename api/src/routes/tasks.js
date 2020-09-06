const express = require('express');
const router = express.Router();
const { createTask, deleteTask } = require('../controllers/tasks');
const validateAuth = require('../middlewares/validateAuth');

router.post('/', validateAuth, createTask);
router.delete('/', validateAuth, deleteTask);

module.exports = router;
