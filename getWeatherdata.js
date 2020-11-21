
const express = require('express');
const { default: Axios } = require('axios');
const bodyParser = require('body-parser');


const router = express.Router();

router.use(bodyParser.json())
router.post('/getweatherdata',(req,res)=>{
    const lat =req.body.lat;
    const lng = req.body.lng;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,daily,minutely&appid=${process.env.KEYS_1}`
    Axios({
      method:"GET",
      url:url,
    }).then(results=>res.send(results.data))

})

module.exports = router;
