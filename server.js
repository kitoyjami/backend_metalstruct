const express=require('express')
const dbConnect = require('./config/dbConnect')
const app =express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
const cookieParser =require("cookie-parser")
const morgan=require('morgan')

const pruebaRouter = require('./routes/pruebaRoute')




const cors = require("cors")


dbConnect()
const allowedOrigins = ['http://localhost:5000'];
app.use(cors({
    origin: function (origin, callback) {
        // Permitir solicitudes sin origen (como las de herramientas locales)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())


app.use("/api/prueba", pruebaRouter) 

app.listen(PORT, () => 
{
    console.log('Servidor corriendo en el puerto:' + PORT)
})