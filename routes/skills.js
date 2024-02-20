var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills');

// GET /skills
router.get('/', skillsController.index);
// GET /skills/:id
router.get('/:id', skillsController.show)

module.exports = router;