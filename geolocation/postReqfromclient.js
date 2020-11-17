
const express = require('express');
const opencage = require('opencage-api-client')
const router = express.Router();
const bodyParser= require('body-parser');


router.use(bodyParser.json())


router.get('/getlocation',(req,res)=>{
    opencage
    .geocode({ 
    q: 'london',
    key:process.env.OCD_API_KEY })
    .then((data) => {
     res.send((data));
    })
    .catch((error) => {
      console.log('error', error.message);
    });
})

module.exports = router;