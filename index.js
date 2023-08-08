const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

// base de datos
dbConnection();

//CORS
app.use(cors());

// directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));

// TODO: CRUD: Eventos

// escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo el puerto ${process.env.PORT}`);
});
