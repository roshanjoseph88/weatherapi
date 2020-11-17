const {Client} = require('@googlemaps/google-maps-services-js');
const { default: Axios } = require('axios');

require('dotenv').config();
const client = new Client;

const express = require('express');

const router = express.Router();


router.get('/google',(req,res)=>{
    client.geolocate({
        params:{
            location:[{ lat: 45, lng: -110 }],
            key:process.env.GOOGLE_API_KEY,
        }
    }).then(data=>res.send(data)).catch(err=>console.log(err))
})

module.exports = router
