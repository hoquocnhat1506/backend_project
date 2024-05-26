const { DeviceService } = require("../services/index");
const defaultResult = {
  message: "success",
  error: null,
  status: true,
  result: null,
};

const getAllDevices = async (req, res) => {
  try {
    const data = await DeviceService.getAllDevices();
    const result = { ...defaultResult, result: data };
    return res.status(200).json(result);
  } catch (error) {
    const result = {
      ...defaultResult,
      error: error.message,
      status: false,
      message: "failed",
    };
    return res.status(500).json(result);
  }
};

const getDeviceDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DeviceService.getDeviceDetail(id);
    if (!data) throw new Error("Not found device detail");
    const result = { ...defaultResult, result: data };
    return res.status(200).json(result);
  } catch (error) {
    const result = {
      ...defaultResult,
      error: error.message,
      status: false,
      message: "failed",
    };
    return res.status(500).json(result);
  }
};

const postCreateDevice = async (req, res) => {
  try {
    const body = req.body;
    const data = await DeviceService.postCreateDevice(body);
    const result = { ...defaultResult, result: data };
    return res.status(201).json(result);
  } catch (error) {
    const result = {
      ...defaultResult,
      error: error.message,
      status: false,
      message: "failed",
    };
    return res.status(500).json(result);
  }
};

const putUpdateDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await DeviceService.putUpdateDevice(id, body);
    const result = { ...defaultResult, result: data };
    return res.status(200).json(result);
  } catch (error) {
    const result = {
      ...defaultResult,
      error: error.message,
      status: false,
      message: "failed",
    };
    return res.status(500).json(result);
  }
};

const deleteAllDevices = async (req, res) => {
  try {
    const data = await DeviceService.deleteAllDevices();
    const result = { ...defaultResult, result: data };
    return res.status(200).json(result);
  } catch (error) {
    const result = {
      ...defaultResult,
      error: error.message,
      status: false,
      message: "failed",
    };
    return res.status(500).json(result);
  }
};

const deleteDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DeviceService.deleteDevice(id);
    if (!data) throw new Error("Not found device delete");
    const result = { ...defaultResult, result: data };
    return res.status(200).json(result);
  } catch (error) {
    const result = {
      ...defaultResult,
      error: error.message,
      status: false,
      message: "failed",
    };
    return res.status(500).json(result);
  }
};

const updateDeviceValue = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    // Tìm thiết bị hiện tại
    const device = await DeviceService.getDeviceDetail(id);
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }

    // Lưu giá trị hiện tại trước khi cập nhật
    const previousDevice = { ...device };

    // Cập nhật giá trị mới
    await DeviceService.putUpdateDevice(id, { value });

    // Lấy thiết bị đã cập nhật
    const updatedDevice = await DeviceService.getDeviceDetail(id);

    return res.status(200).json({
      message: "Device value updated successfully",
      error: null,
      status: true,
      result: {
        previousDevice: {
          name: previousDevice.name,
          lat: previousDevice.lat,
          long: previousDevice.long,
          address: previousDevice.address,
          unit: previousDevice.unit,
          value: previousDevice.value,
        },
        updatedDevice: {
          name: updatedDevice.name,
          lat: updatedDevice.lat,
          long: updatedDevice.long,
          address: updatedDevice.address,
          unit: updatedDevice.unit,
          value: updatedDevice.value,
          updatedAt: updatedDevice.updatedAt,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "failed",
      error: error.message,
      status: false,
      result: null,
    });
  }
};

module.exports = {
  getAllDevices,
  getDeviceDetail,
  postCreateDevice,
  putUpdateDevice,
  deleteAllDevices,
  deleteDevice,
  updateDeviceValue,
};
