const express = require('express');
const router = express.Router();
const {
  createTask,
  deleteTask,
  changeStatus,
  searchTask
} = require('../controllers/tasks');
const validateAuth = require('../middlewares/validateAuth');

router.post('/', validateAuth, createTask);
router.delete('/', validateAuth, deleteTask);
router.put('/changeStatus/:_id', validateAuth, changeStatus);
router.get('/search', validateAuth, searchTask);

module.exports = router;
