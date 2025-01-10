const Prueba = require('../models/pruebaModel');
const asyncHandler = require('express-async-handler');

const prueba = asyncHandler(async (req, res) => {
    const prueba = "Hola Mundo";
    res.json(prueba);
});
const pruebasuma= asyncHandler(async(req,res)=>{
    const suma=10+15
    res.json(suma)
})


module.exports = { prueba,pruebasuma };