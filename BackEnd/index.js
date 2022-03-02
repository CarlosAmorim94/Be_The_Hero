const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: "Testando backend com NodeJs",
    nome: 'Carlos Augusto Vezza Amorim'
  })
});

app.listen(3333);

