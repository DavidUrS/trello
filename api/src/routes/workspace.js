const express = require('express');
const router = express.Router();
const { getOne, deleteWorkspace } = require('../controllers/workspace');
const validateAuth = require('../middlewares/validateAuth');

router.get('/', validateAuth, getOne);
router.delete('/:_id', validateAuth, deleteWorkspace);

module.exports = router;
