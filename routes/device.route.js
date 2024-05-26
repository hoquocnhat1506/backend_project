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

/**
 * @swagger
 * /v1/device:
 *   get:
 *     summary: Lấy tất cả thiết bị
 *     description: Lấy danh sách tất cả các thiết bị
 *     responses:
 *       200:
 *         description: Một danh sách các thiết bị
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Device'
 */

router.get("/", getAllDevices);
router.get("/:id", getDeviceDetail);
router.post("/create", postCreateDevice);
router.put("/:id", putUpdateDevice);
router.delete("/", deleteAllDevices);
router.delete("/:id", deleteDevice);
router.put("/updatevalue/:id", updateDeviceValue);

module.exports = router;
