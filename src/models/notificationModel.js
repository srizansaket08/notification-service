const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  user_id: String,
  type: String,
  message: String,
  status: { type: String, default: "sent" },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", notificationSchema);