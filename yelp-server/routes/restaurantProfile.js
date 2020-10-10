const express = require('express');
const pool = require('../pool');

const router = express.Router();

router.get('/:user_id/details', (req, res) => {
  const sql = `CALL get_restaurant_details('${req.params.user_id}')`;
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

router.post('/:rest_id/details', (req, res) => {
  const sql = `CALL update_restaurant_details('${req.params.rest_id}','${
    req.body.name
  }','${req.body.email}','${req.body.address}','${req.body.description}','${
    req.body.city
  }','${req.body.state}','${req.body.phone}', '${req.body.deliveryMethod}','${req.body.openingtime}','${
    req.body.closingtime
  }',${req.body.zipcode === '' ? 'NULL' : req.body.zipcode})`;

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

router.get('/:rest_id/reviews', (req, res) => {
  const sql = `CALL get_reviews('${req.params.rest_id}')`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0]) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(result[0]));
    }
  });
});

router.post('/:rest_id/uploadphoto/', (req, res) => {
  const sql = `CALL update_restaurant_image(${req.params.rest_id},'${req.body.filename}')`;
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
