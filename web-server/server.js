var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

app = express();

//Cargar rutas
var appRoutes = require('./app/routes/appRoutes');
var appRoutesQue = require('./app/routes/appRoutesQue');
var appRoutesAns = require('./app/routes/appRoutesAns');



//cors
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', appRoutes);
app.use('/', appRoutesQue);
app.use('/', appRoutesAns);


module.exports = app;

