const express = require('express');
const router = express.Router();
const {
  createTask,
  deleteTask,
  changeStatus
} = require('../controllers/tasks');
const validateAuth = require('../middlewares/validateAuth');

router.post('/', validateAuth, createTask);
router.delete('/', validateAuth, deleteTask);
router.put('/changeStatus/:_id', validateAuth, changeStatus);

module.exports = router;
