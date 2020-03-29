const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Tipos de Parametros
 * 
 * Query params: parametros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route params: Parametros utilizados para identificar recursos 
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333);