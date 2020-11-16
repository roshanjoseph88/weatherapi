const express = require('express');


const router =express.Router();

router.get("/",(req,res)=>{
    const lat = {...32};
    const long ={...45}
    res.send({...lat,...long})
})

module.exports = router;