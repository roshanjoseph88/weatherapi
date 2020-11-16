require('dotenv').config()
const { default: Axios } = require('axios');
const express = require('express');
const router =express.Router();


router.get('/',(req,res)=>{
    Axios({
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: 'London,uk',
          lat: '0',
          lon: '0',
          id: '2172797',
          lang: 'null',
          units: '"metric" or "imperial"',
          mode: 'xml, html'
        },
        headers: {
          'x-rapidapi-key': process.env.KEYS_1,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    }).then(data=>res.send(data.data))
   
})


module.exports = router;