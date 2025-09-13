const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde Servidor 1 ');
});

app.listen(3000, () => {
  console.log('Servidor 1 escuchando en puerto 3000');
});