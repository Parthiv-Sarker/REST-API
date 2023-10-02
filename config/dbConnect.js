const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected...");
    } catch (error) {
        console.log("Error to Connected DB...");
    }
}

module.exports = connect;