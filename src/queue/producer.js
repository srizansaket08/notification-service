const amqp = require("amqplib");

exports.publishToQueue = async (queue, msg) => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
  setTimeout(() => {
    connection.close();
  }, 500);
};