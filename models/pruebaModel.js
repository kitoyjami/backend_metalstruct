const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pruebaSchema = new Schema({ 
    prueba: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Prueba', pruebaSchema);