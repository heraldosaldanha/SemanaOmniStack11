const express = require('express');
const { errors } =  require('celebrate');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //Setando o padrão de comunicação das requests
app.use(routes); //configuração de rotas
app.use(errors());

module.exports = app;