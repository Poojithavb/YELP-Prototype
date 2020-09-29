const express = require('express');
const passwordHash = require('password-hash');
const pool = require('../pool.js');

const router = express.Router();

router.post('/newuser', (req, res) => {
  const hashPassword = passwordHash.generate(req.body.password);
  const sql = `CALL InsertUserData('${req.body.fname}','${req.body.lname}','${req.body.email}','${hashPassword}')`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status === 'Inserted') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    } else {
      // res.writeHead(401, { 'Content-Type': 'text/plain' });

      res.end(result[0][0].status);
    }
  });
});

router.post('/restaurant', (req, res) => {
  const hashPassword = passwordHash.generate(req.body.password);
  const sqlquery = `CALL InsertRestaurantSignUpDetails('${req.body.name}','${req.body.email}','${hashPassword}','${req.body.address}',${req.body.zipcode})`;
  pool.query(sqlquery, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.send('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status === 'Inserted') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    } else {
      // res.writeHead(401, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    }
  });
});

module.exports = router;
