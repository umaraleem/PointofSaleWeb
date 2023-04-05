const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    var companyname = req.body.companyname;
    var ownername = req.body.ownername;
    var email= req.body.email;
    var password= req.body.password;
    var country= req.body.country;
    var city= req.body.city;
    var des= req.body.des;
    var companytype= req.body.companytype;
    console.log(companyname);
    console.log(ownername);
    console.log(email);
    console.log(password);
    console.log(country);
    console.log(city);
    console.log(des);
    console.log(companytype);
}) 

module.exports = router;