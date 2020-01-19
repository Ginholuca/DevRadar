const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //array para entender que o campo armazena várias Strings.
    location: {
        type: PointSchema,
        index: '2dsphere'//indice facilita a busca.  2dshere => ponto de long lat
    }
});

module.exports = mongoose.model('Dev', DevSchema); //exportando 
