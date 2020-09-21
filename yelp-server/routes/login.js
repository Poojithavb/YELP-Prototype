const express = require('express');
const passwordHash = require('password-hash');
const pool = require('../pool');

const router = express.Router();

router.post('/', (req, res) => {
  const sql = `CALL Fetchuserpassword('${req.body.email_id}')`;
  pool.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.send('Database Error');
    }

    if (result && result.length > 0 && result[0][0].status === 1) {
      if (passwordHash.verify(req.body.password, result[0][0].password)) {
        res.cookie('cookie', 'admin', {
          maxAge: 9000000,
          httpOnly: false,
          path: '/',
        });
        req.session.user = req.body.email_id;
        const userObject = {
          user_id: result[0][0].user_id,
          firstname: result[0][0].firstname,
          lastname: result[0][0].lastname,
        };
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(userObject));
      } else {
        res.end('Username/password is wrong');
      }
    } else if (result[0][0].status === 0) {
      // res.writeHead(401, { 'Content-Type': 'text/plain' });
      res.end('User doesnot exists');
    }
  });
});

module.exports = router;
