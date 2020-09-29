const { Router } = require('express');
const express = require('express');
const pool = require('../pool');

const router = express.Router();

router.get('/:user_id', (req, res) => {
  const sql = `CALL get_customer_details('${req.params.user_id}')`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(result[0][0]));
    }
  });
});

router.post('/:user_id', (req, res) => {
  const sql = `CALL update_user_basicdetails('${req.params.user_id}','${
    req.body.firstname
  }','${req.body.lastname}','${req.body.nickname}','${req.body.headline}','${
    req.body.dateofbirth
  }','${req.body.city}','${req.body.state}','${req.body.country}',${
    req.body.zipcode === '' ? 'NULL' : req.body.zipcode
  })`;

  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    }
  });
});

router.post('/:user_id/aboutme/', (req, res) => {
  const sql = `CALL update_user_aboutme(${req.params.user_id},'${req.body.ilove}','${req.body.findmein}','${req.body.blog}','${req.body.not_yelping}'
  )`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    }
  });
});

router.post('/:user_id/contactInfo/', (req, res) => {
  const sql = `CALL update_user_contact(${req.params.user_id},'${req.body.email}','${req.body.contactnum}')`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    }
  });
});

module.exports = router;
