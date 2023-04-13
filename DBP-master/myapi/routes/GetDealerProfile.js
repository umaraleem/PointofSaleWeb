const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    var UserId = req.query.UserId;
    console.log(req.query.UserId);
    console.log(UserId);
    var query=`SELECT Users.Email,Dealer.FirstName, Dealer.LastName,Dealer.Picture,Dealer.ProductsAndServices,Dealer.AddressId,Dealer.AccountId ,Dealer.Contact,Address.address,Address.City,Address.Country,Account.AccountBank,Account.AccountNumber,Account.AccountTitle  from Users JOIN Dealer ON Users.UserId = Dealer.UserId LEFT JOIN Address ON Address.AddressId = Dealer.AddressId LEFT JOIN Account ON Account.AccountId = Dealer.AccountId WHERE Users.UserId = ${UserId}`;
    connection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Failed to execute the query:', error);
          return;
        }
        console.log(results);
        res.send(results);
      });
    })

module.exports = router;