const express = require("express");
const router = express.Router();
const waterLevelController = require("../controllers/waterLevelController");

router.post("/", waterLevelController.measureWaterLevel);

module.exports = router;
