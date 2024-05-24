const express = require("express");
const {
  getAllDevices,
  getDeviceDetail,
  postCreateDevice,
  putUpdateDevice,
  deleteAllDevices,
  deleteDevice,
} = require("../controllers/device.controller");

const router = express.Router();

router.get("/", getAllDevices);
router.get("/:id", getDeviceDetail);
router.post("/create", postCreateDevice);
router.put("/:id", putUpdateDevice);
router.delete("/", deleteAllDevices);
router.delete("/:id", deleteDevice);

module.exports = router;
