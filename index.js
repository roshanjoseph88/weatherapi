

require('dotenv').config()
const express = require('express');
const server = express();

const weatherApiget = require('./getRequest/weatherapiget');
const latandLongget = require('./postRequest/latandlongPost');

server.use(weatherApiget)






const PORT = 5000;
server.listen(PORT,()=>console.log(`connected to port${PORT}`))