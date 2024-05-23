const { Router } = require("express");
const { DeviceController } = require("../controllers/index");
const router = Router();

//[GET] Get all devices
router.get("/", DeviceController.getAllDevices);

//[GET] Get device detail
router.get("/:id", DeviceController.getDeviceDetail);

//[POST] Create a new device
router.post("/create", DeviceController.postCreateDevice);

//[PUT] Update a device
router.put("/update/:id", DeviceController.putUpdateDevice);

//[DELETE] Delete a device
router.delete("/delete/:id", DeviceController.deleteDevice);

//[DELETE] Delete all devices
router.delete("/delete", DeviceController.deleteAllDevices);

module.exports = router;
