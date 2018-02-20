const express = require("express");
var router = express.Router();

var bottle_controller = require('../controllers/bottleController');

// GET cellar home page
router.get('/', bottle_controller.bottle_list);

module.exports = router;
