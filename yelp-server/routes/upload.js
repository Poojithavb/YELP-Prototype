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

router.post('/item', upload.single('image'), (req, res) => {
  try {
    return res.status(201).json({
      message: 'File uploded successfully',
    });
  } catch (error) {
    console.log(error);
  }
});

const eventstorage = multer.diskStorage({
  destination: path.join(__dirname, '..') + '/public/uploads/events',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadeventimage = multer({ storage: eventstorage });

router.post('/eventimage', uploadeventimage.single('image'), (req, res) => {
  try {
    return res.status(201).json({
      message: 'File uploded successfully',
    });
  } catch (error) {
    console.log(error);
  }
});

const profilestorage = multer.diskStorage({
  destination: path.join(__dirname, '..') + '/public/uploads/profileImage',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadprofileimage = multer({ storage: profilestorage });

router.post('/profileimage', uploadprofileimage.single('image'), (req, res) => {
  try {
    return res.status(201).json({
      message: 'File uploded successfully',
    });
  } catch (error) {
    console.log(error);
  }
});

const reststorage = multer.diskStorage({
  destination: path.join(__dirname, '..') + '/public/uploads/restaurantImage',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadrestimage = multer({ storage: reststorage });

router.post('/restaurantimage', uploadrestimage.single('image'), (req, res) => {
  try {
    return res.status(201).json({
      message: 'File uploded successfully',
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
