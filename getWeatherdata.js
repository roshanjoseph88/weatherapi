
const express = require('express');
const { default: Axios } = require('axios');


const router = express.Router();

router.get('/getweatherdata',(req,res)=>{
    const location = req.body.location;
    Axios({
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: 'London,uk',
          lat: '0',
          lon: '0',
          callback: 'test',
          id: '2172797',
          lang: 'null',
          units: '"metric" or "imperial"',
          mode: 'xml, html'
        },
        headers: {
          'x-rapidapi-key': process.env.OCD_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    })

})


