const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde Servidor 3 ');
});

app.listen(3000, () => {
  console.log('Servidor 3 escuchando en puerto 3000');
});