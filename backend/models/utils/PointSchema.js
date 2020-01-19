//arquivo não sere um tabela no banco de dados, sera só uma utilidade

const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'], //point = ponto do mapa
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,   
    },
});

module.exports = PointSchema;