const express = require('express');
const pool = require('../pool');

const router = express.Router();

router.post('/placeorder', (req, res) => {
  const sql = `CALL Insert_Orders(${req.body.totalPrice},'${req.body.category}','${req.body.order_status}',${req.body.cust_id},${req.body.rest_id})`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Some error has occured');
    }
    if (result && result.length > 0 && result[0][0].status === 'ORDER_PLACED') {
      req.body.items.forEach((item) => {
        const sqlItems = `CALL Insert_Orders_Items(${
          result[0][0].order_id
        },'${Object.keys(item)}','${Object.values(item)}')`;
        pool.query(sqlItems, (error, result) => {
          if (error) {
            res.writeHead(500, {
              'Content-Type': 'text/plain',
            });
            res.end('Database Error');
          }
        });
      });
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end(JSON.stringify(result[0][0]));
    } else {
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end(result[0][0]);
    }
  });
});

router.get('/:cust_id/getdetails', (req, res) => {
  const sql = `CALL get_customer_order_details(${req.params.cust_id})`;
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

router.get('/:order_id/getorderdetails', (req, res) => {
  const sql = `CALL get_order_items(${req.params.order_id})`;
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

router.get('/:rest_id/getitemdetails', (req, res) => {
  const sql = `CALL get_restaurant_orders(${req.params.rest_id})`;
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

router.post('/update', (req, res) => {
  const sql = `CALL update_orders(${req.body.order_id},'${req.body.order_status}')`;
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

router.post('/cancel', (req, res) => {
  const sql = `CALL cancel_orders(${req.body.order_id})`;
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
