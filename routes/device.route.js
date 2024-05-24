const express = require("express");
const router = express.Router();
const {
  getAllDevices,
  getDeviceDetail,
  postCreateDevice,
  putUpdateDevice,
  deleteAllDevices,
  deleteDevice,
  updateDeviceValue,
} = require("../controllers/device.controller");

router.get("/", getAllDevices);
router.get("/:id", getDeviceDetail);
router.post("/create", postCreateDevice);
router.put("/:id", putUpdateDevice);
router.delete("/", deleteAllDevices);
router.delete("/:id", deleteDevice);
router.put("/updatevalue/:id", updateDeviceValue);

module.exports = router;
