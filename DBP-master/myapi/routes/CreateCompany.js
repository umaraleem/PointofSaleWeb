const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const {Companies} = require('./Classes/Companies');
const  {User} = require('./Classes/user');
const {Address} = require ('./Classes/Address');

router.post('/',(req,res)=>{
        const user = new User(req.body.email,req.body.password,1);
        const UserId = parseInt(req.query.UserId)+1;
        const AddressId = parseInt(req.query.AddressId)+1;
        console.log(UserId,AddressId);
        const userdata = {
            email : user.email,
            password : user.password,
            roleId : user.roleId,
        }
        connection.query('INSERT INTO Users SET ?', userdata, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect("http://localhost:3000/?register=true");
          });
          // const query = 'SELECT UserId FROM Users Where Email = "'+ user.email + '" and Password = "' + user.password + '"';
          // let userId = null;
          // connection.query(query, (error, results, fields) => {
          //   if (error) {
          //     console.error('Error retrieving data from MySQL database:', error);
          //     return;
          //   }
          //   else{
          //       res.send(results);
          //       userId = results;

          //   }
          //   console.log('Data retrieved from MySQL database:', results);
          // });


        const addresss = new Address(req.body.Address,req.body.city,req.body.country);
        const addressdata = {
            address : addresss.address,
            city : addresss.city,
            country : addresss.country,
        }
        connection.query('INSERT INTO Address SET ?', addressdata, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect("http://localhost:3000/?register=true");
          });
          // query = 'SELECT AddressId FROM Address Where address = "'+ addresss.address + '" and City = "' + addresss.city + '" and Counry = "'+ addresss.country+'"';
          // let addressId = null;
          // connection.query(query, (error, results, fields) => {
          //   if (error) {
          //     console.error('Error retrieving data from MySQL database:', error);
          //     return;
          //   }
          //   else{
          //       res.send(results);
          //       addressId = results;

          //   }
          //   console.log('Data retrieved from MySQL database:', results);
          // });


          query = 'SELECT CompanyTypeId FROM CompanyType Where Type = "'+ req.body.companytype +'"';
          let companytypeId = null;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                companytypeId = results[0].CompanyTypeId;
                const Company = new Companies(req.body.companyname,req.body.ownername,AddressId,companytypeId,UserId);
                const Companiesdata = {
                    companyMission : null,
                    companyHistory : null,
                    productsAndServices : null,
                    companyName : Company.companyName,
                    picture:null,
                    company_contact : null,
                    ownerName:Company.ownerName,
                    addressId:Company.addressId,
                    companyTypeId:Company.companyTypeId,
                    userId : Company.userId,
                } 

                connection.query('INSERT INTO Companies SET ?', Companiesdata, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    res.redirect("http://localhost:3000/");
                  });
                    }
                    console.log('Data retrieved from MySQL database:', results);
              });
          
        
        
}) 

module.exports = router;