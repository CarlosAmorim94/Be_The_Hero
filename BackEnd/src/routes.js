const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  const body = request.body;

  console.log(body)


  return response.json({
    evento: "Testando backend com NodeJs",
    nome: 'Carlos Augusto Vezza Amorim'
  })
});


module.exports = routes