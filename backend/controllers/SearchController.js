const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({ //passo um objeto para ter filtros
            techs: {
                $in: techsArray,   //https://docs.mongodb.com/manual/reference/operator/
            },
            location:{
                $near: {           //https://docs.mongodb.com/manual/reference/operator/
                    $geometry: {
                        type: 'Point',
                        coordinate: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },  
            },
        });

        return res.json({devs})
    }
}