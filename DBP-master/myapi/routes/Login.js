const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    // console.log(email);
    // console.log(password);
}) 

module.exports = router;