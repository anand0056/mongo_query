# mongo_query

Simple Node.js + Express + Mongoose example with a MongoDB aggregate query.

## Prerequisites
- Node.js installed
- MongoDB running locally on `mongodb://127.0.0.1:27017`

## Install
```bash
npm install
```

## Run
```bash
npm start
```

The server runs on:
```bash
http://localhost:3000
```

## API
### Get aggregate report
```bash
GET /orders/report
```

This route returns completed orders grouped by customer name, with:
- total amount
- total number of orders

## Mongo database
Database used:
```bash
mydb
```

Collection used:
```bash
orders
```
