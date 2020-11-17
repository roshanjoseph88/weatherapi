
const express = require('express');
const bodyParser = require('body-parser');
const opencage = require('opencage-api-client');
const router = express.Router();
router.use(bodyParser.json())

router.post('/setlocationname',(req,res)=>{
    const location = req.body.place.toLowerCase();
    console.log(location)
    opencage
    .geocode({ q: location })
    .then((data) => {
    res.send(data.results[0].geometry);
    })
    .catch((error) => {
    console.log('error', error.message);
    });
})

module.exports = router;