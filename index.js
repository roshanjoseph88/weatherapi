

require('dotenv').config()
const express = require('express');
const server = express();

const weatherApiget = require('./getRequest/weatherapiget');
const latandLongget = require('./postRequest/latandlongPost');
const googleRouter = require('./getRequest/googleLocation');
const opentGeorouter = require('./geolocation/postReqfromclient')
server.use(weatherApiget)
server.use(googleRouter)
server.use(opentGeorouter)





const PORT = 5000;
server.listen(PORT,()=>console.log(`connected to port${PORT}`))