const amqp = require("amqplib");
const emailService = require("../services/emailService");

const startConsumer = async () => {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const ch = await conn.createChannel();
  const queue = "notificationQueue";

  await ch.assertQueue(queue);

  ch.consume(queue, async (msg) => {
    const data = JSON.parse(msg.content.toString());
    console.log("Processing:", data);
    await emailService.send(data.user_id, data.message);
    ch.ack(msg);
  });
};

startConsumer();