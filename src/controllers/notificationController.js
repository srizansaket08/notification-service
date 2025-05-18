const emailService = require("../services/emailService");
const smsService = require("../services/smsService");
const inAppService = require("../services/inAppService");

const sendNotification = async (req, res) => {
  const { user_id, type, message } = req.body;

  try {
    switch (type) {
      case "email":
        await emailService.send(user_id, message);
        break;
      case "sms":
        await smsService.send(user_id, message);
        break;
      case "inapp":
        await inAppService.store(user_id, message);
        break;
      default:
        return res.status(400).json({ error: "Invalid type" });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserNotifications = async (req, res) => {
  const { id } = req.params;
  const notifications = await inAppService.getUserNotifications(id);
  res.json(notifications);
};

module.exports = { sendNotification, getUserNotifications };