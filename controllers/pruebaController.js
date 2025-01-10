const Prueba = require('../models/pruebaModel');
const asyncHandler = require('express-async-handler');

const prueba = asyncHandler(async (req, res) => {
    const prueba = "Hola Mundo";
    res.json(prueba);
});
module.exports = { prueba };