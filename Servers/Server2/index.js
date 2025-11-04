const express = require('express');
const app = express();

app.get('/', (req, res) => {

const html= 
  `<html>
      <head>
        <title>Servidor 2</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            background-color: #282c34; 
            color: white; 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #61dafb; /* Un color azul tipo React */
            font-size: 3rem;
            text-shadow: 2px 2px 4px #000000;
          }
        </style>
      </head>
      <body>
        <h1>Hola desde el servidor 2</h1>
      </body>
    </html>
  `;



  res.send(html);
});

app.listen(3000, () => {
  console.log('Servidor 2 escuchando en puerto 3000');
});