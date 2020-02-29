const express = require('express');
const router = express.Router();

const connection = require('../database.js');

router.get('/api/customers', function(req, res) {
  connection.connect();

  connection.query('SELECT * FROM CUSTOMERS', function(error, results, fields) {
    if (error) {
      throw error;
    } else {
      res.status(200).send(results);
    }
  });

  connection.end();
});

router.get('/api/customers/:id', function(req, res) {
  connection.connect();

  connection.query(
    `SELECT * FROM CUSTOMERS WHERE ID = ${req.params.id}`,
    function(error, results, fields) {
      if (error) {
        throw error;
      } else {
        res.status(200).send(results);
      }
    }
  );

  connection.end();
});

module.exports = router;
