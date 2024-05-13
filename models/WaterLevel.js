const mongoose = require("mongoose");

const waterLevelSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "water_level",
  },
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: "m",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  device: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Device",
  },
});

waterLevelSchema.virtual("hour").get(function () {
  return this.timestamp.getHours();
});

waterLevelSchema.virtual("minute").get(function () {
  return this.timestamp.getMinutes();
});

waterLevelSchema.virtual("second").get(function () {
  return this.timestamp.getSeconds();
});

const WaterLevel = mongoose.model("WaterLevel", waterLevelSchema);
