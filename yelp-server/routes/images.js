const express = require('express');
const path = require('path');
const fs = require('fs');
const pool = require('../pool');

const router = express.Router();

router.get('/item/:item_image', (req, res) => {
  const image =
    path.join(__dirname, '..') +
    '/public/uploads/items/' +
    req.params.item_image;

  if (fs.existsSync(image)) {
    res.sendFile(image);
  }
});

router.get('/events/:filename', (req, res) => {
  const image =
    path.join(__dirname, '..') +
    '/public/uploads/events/' +
    req.params.filename;

  if (fs.existsSync(image)) {
    res.sendFile(image);
  }
});

router.get('/user/:filename', (req, res) => {
  const image =
    path.join(__dirname, '..') +
    '/public/uploads/profileImage/' +
    req.params.filename;

  if (fs.existsSync(image)) {
    res.sendFile(image);
  }
});

router.get('/rest/:filename', (req, res) => {
  const image =
    path.join(__dirname, '..') +
    '/public/uploads/restaurantImage/' +
    req.params.filename;

  if (fs.existsSync(image)) {
    res.sendFile(image);
  }
});

module.exports = router;
