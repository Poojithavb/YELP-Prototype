const express = require('express');
const passwordHash = require('password-hash');
const pool = require('../pool');

const router = express.Router();

router.post('/add', (req, res) => {
  const sql = `CALL Insertmenuitem('${req.body.name}','${req.body.ingredients}',${req.body.price},'${req.body.description}','${req.body.category}','${req.body.filename}',${req.body.rest_id})`;
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

router.post('/edit/:item_id', (req, res) => {
  const sql = `CALL Updatemenuitem(${req.params.item_id},'${req.body.name}','${req.body.ingredients}',${req.body.price},'${req.body.description}','${req.body.category}','${req.body.filename}',${req.body.rest_id})`;
  pool.query(sql, (err, result) => {
    console.log(sql);
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

router.get('/show/:rest_id', (req, res) => {
  const sql = `CALL get_menu_items(${req.params.rest_id})`;
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

router.get('/edit/:item_id', (req, res) => {
  const sql = `CALL get_menu_item(${req.params.item_id})`;
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

module.exports = router;
