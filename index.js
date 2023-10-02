const express = require('express');
const dotenv = require('dotenv');
const taskRoute = require('./routes/task.js');

dotenv.config();

const app = express();
// [express.json()] is to get json data.Only for postman use..
app.use(express.json());


// All task routes..
app.use("/api/task",taskRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})