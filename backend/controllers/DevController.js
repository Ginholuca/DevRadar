// controllers é o Responsável por receber uma aquisição, ativar o que precisa e devolver uma resposta.

const axios = require('axios');// chamar outra API
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


//functions do Controllers: index, show, store, update, destroy 
//index -> quando quer mostrar uma lista de um recurso (DevC)
//show -> mostrar um unico dev
//store -> criar
//update -> alterar
//destroy -> deletar

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },
    async store(req, res) { //store por estar gravando
        const { github_username, techs, latitude, longitude } = req.body;
        // async para avisar que a function pode demorar pra responder...
        
        let dev = await Dev.findOne({ github_username });//encontrar o dev baseado no username

        if (!dev) {

            const response = await axios.get(`https://api.github.com/users/${github_username}`); // resposta da API & crase em Strings pode colocar variáveis
            /*await aguarda a function finalizar pra devolver uma resposta antes de continuar o código
            sem o await, a aplicação iria devolver a resposta antes de resgatar a API do github*/
        
            //se o name não existir, ele pega o valor do Login
            const { name = login, avatar_url, bio } = response.data

            const techsArray = parseStringAsArray(techs);
        
            const location = {  //nome da info q ta gravando na base de dados
                type: 'Point',
                coordinates: [longitude, latitude], 
             };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
            //salvei o retorno da func na variavel dev para ter o retorno do banco de dados
            
        }

        return res.json( dev );
        //retorna os dados da variavel dev pois foi recém cadastrados no banco de dados
    }
};