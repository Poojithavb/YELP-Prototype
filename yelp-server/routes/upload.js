const express = require('express');
const path = require('path');
const multer = require('multer');
const pool = require('../pool.js');

const router = express.Router();

const itemstorage = multer.diskStorage({
  destination: path.join(__dirname, '..') + '/public/uploads/items',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: itemstorage });

router.post('/item', upload.single('image'), (req, res, next) => {
  try {
    return res.status(201).json({
      message: 'File uploded successfully',
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
