const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://ginholuca:ginholuca@devradar-ftz5r.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({  }))
app.use(express.json());
app.use(routes);
//Metodos HTTP: GET, PUT, POST & DELETE.

//Tipos de Parametros:
//Query Params: request.query (Filtros, ordenação, paginação ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro )

// REST API Standard
// https://github.com/WhiteHouse/api-standards
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



app.listen(3333);
