const Notification = require("../models/notificationModel");

exports.store = async (userId, message) => {
  await Notification.create({
    user_id: userId,
    type: "inapp",
    message
  });
};

exports.getUserNotifications = async (userId) => {
  return await Notification.find({ user_id: userId });
};