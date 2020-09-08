const express = require('express');
const router = express.Router();
const {
  createTask,
  deleteTask,
  searchTask,
  archiveTask,
  changeStatus
} = require('../controllers/tasks');
const validateAuth = require('../middlewares/validateAuth');

router.post('/', validateAuth, createTask);
router.delete('/', validateAuth, deleteTask);
router.get('/search', validateAuth, searchTask);
router.put('/archive', validateAuth, archiveTask);
router.put('/changeStatus/:_id', validateAuth, changeStatus);

module.exports = router;
