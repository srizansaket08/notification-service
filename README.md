
# 📬 Notification Service

A microservice to send notifications via **Email**, **SMS**, and **In-App** using **Node.js**, **MongoDB**, and **RabbitMQ**.

---

## 🚀 Features

- ✅ In-App notifications stored in **MongoDB**
- ✅ Email notifications via **Nodemailer**
- ✅ SMS notifications (simulated via console)
- ✅ Asynchronous message queue using **RabbitMQ**
- ✅ Clean, modular architecture

---

## 🛠 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- RabbitMQ
- Nodemailer (Gmail SMTP)
- Simulated SMS (console output)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notification-service.git
cd notification-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root folder:

```env
PORT=3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
RABBITMQ_URL=amqp://localhost
MONGODB_URI=mongodb://localhost:27017/notifications
```

> ⚠️ For Gmail: enable 2FA and generate an [App Password](https://myaccount.google.com/apppasswords)

---

### 4. Start MongoDB & RabbitMQ (Optional with Docker)

```bash
# MongoDB
docker run -d -p 27017:27017 --name mongo mongo

# RabbitMQ with Management UI (http://localhost:15672)
docker run -d --hostname rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

---

### 5. Run the App

Start the API server:

```bash
npm start
```

Start the message consumer:

```bash
npm run consumer
```

---

## 📌 API Endpoints

### ➕ POST /notifications

Send a notification:

```json
{
  "user_id": "123",
  "type": "inapp", // or "email", "sms"
  "message": "Hello from the Notification Service!"
}
```

### 📥 GET /notifications/user/:id

Retrieve in-app notifications for a user.

---

## 📁 Project Structure

```
notification-service/
├── config/              # Env & setup
├── controllers/         # API logic
├── queues/              # RabbitMQ producer/consumer
├── services/            # Email, SMS, in-app
├── models/              # Mongoose schema
├── routes/              # Express routes
├── server.js            # Main app
├── consumer.js          # Queue listener
└── .env.example         # Sample env file
```

---

## 📥 `.env.example`

```env
PORT=3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RABBITMQ_URL=amqp://localhost
MONGODB_URI=mongodb://localhost:27017/notifications
```

---

## 📌 To Do (Optional)

- Real SMS integration (e.g., Twilio)
- Docker + Docker Compose
- Retry/Dead-letter queue handling
- Basic frontend UI or dashboard

---

## 👨‍💻 Author

**Saket Srizan**  
📧 srizansaket08@gmail.com  
🔗 [github.com/srizansaket08](https://github.com/srizansaket08)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
