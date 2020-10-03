const express = require('express');
const pool = require('../pool');

const router = express.Router();

router.post('/add', (req, res) => {
  const sql = `CALL InsertEvent('${req.body.name}','${req.body.desc}','${req.body.time}','${req.body.date}','${req.body.location}','${req.body.hashtags}','${req.body.fileText}',${req.body.rest_id})`;
  pool.query(sql, (err, result) => {
    console.log(sql);
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status) {
      console.log(result);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result[0][0].status);
    }
  });
});

router.get('/show/:rest_id', (req, res) => {
  const sql = `CALL get_events(${req.params.rest_id})`;
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
