# REST API using Express.js, Node.js, and MongoDB

This is a basic example of a RESTful API built with Express.js, Node.js, and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of resources.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

1. Node.js and npm installed on your machine.
2. MongoDB installed and running.

### Installation

**Clone this repository to your local machine.**

```bash
git clone https://github.com/Parthiv-Sarker/REST-API.git
```
**Navigate to the project directory.**
```
cd express-node-mongodb-api
```
**Install dependencies.**
```
npm install
```
**Create a .env file in the project root and configure your MongoDB connection. Example:**
```
MONGODB_URI=mongodb://localhost:27017/mydatabase
```
**Start the server.**
```
npm run dev
```
The server should now be running on http://localhost:3000.

# API Endpoints
The following API endpoints are available:

**GET** */api/task:* Retrieve a list of all task.

**GET** */api/task/:id:* Retrieve a specific task by ID.

**POST** */api/task:* Create a new task.

**PATCH** */api/task/:id:* Update a specific task by ID.

**DELETE** */api/task/:id:* Delete a specific task by ID.

---
<img width="1440" alt="Screenshot 2023-10-02 at 9 12 43 PM" src="https://github.com/Parthiv-Sarker/Express-App/assets/126268558/d5ecb32e-d05b-458d-932b-462350a2e5ff">

---
<img width="1440" alt="Screenshot 2023-10-02 at 9 13 31 PM" src="https://github.com/Parthiv-Sarker/Express-App/assets/126268558/1c4a1671-1dd3-46c7-b44b-e3da447e1d8d">

---
