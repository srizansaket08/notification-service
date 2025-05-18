# Notification Service

A simple notification system supporting Email, SMS, and In-app notifications with RabbitMQ queue support.

## Setup

```bash
npm install
cp .env.example .env
# Fill in your EMAIL_USER and EMAIL_PASS
npm start
```

### To Run RabbitMQ Consumer

```bash
npm run consumer
```

## Endpoints

- `POST /notifications` — Send notification
- `GET /notifications/user/:id` — Get notifications for user