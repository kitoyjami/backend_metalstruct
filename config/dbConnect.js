const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const DB_URI = process.env.DB_URI;

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Error al conectar a la base de datos", error);
    }
};

module.exports = dbConnect;