require('dotenv').config()
const express = require('express');
const server = express();

const getLocation = require('./getLocation')

server.use(getLocation);


const PORT = 5000;
server.listen(PORT,()=>console.log(`connected to port${PORT}`))