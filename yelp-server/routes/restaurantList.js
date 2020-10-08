const express = require('express');
const pool = require('../pool');

const router = express.Router();

router.get('/list', (req, res) => {
  const sql = 'CALL get_all_restaurants()';
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

router.post('/:rest_id/addreview', (req, res) => {
  const sql = `CALL InsertReview(${req.body.rating},'${req.body.review}',${req.body.rest_id},${req.body.cust_id})`;

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

router.get('/searchlist/:selectoption/:keyword', (req, res) => {
  const sql = `CALL get_searchRest('${req.params.keyword}',${req.params.selectoption})`;
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

module.exports = router;
