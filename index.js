require('dotenv').config()
const express = require('express');
const server = express();

const getLocation = require('./getLocation')
const getweatherData = require('./getWeatherdata')

server.use(getLocation);
server.use(getweatherData)


const PORT = 4000;
server.listen(PORT,()=>console.log(`connected to port${PORT}`))