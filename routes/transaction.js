'use strict';
const express = require('express');
const router = express.Router();

// transaction buy or sell stock
router.get('/T', (req, res) => {
    res.render('transaction', {
      msg: 'TRANSACTIONS BUY OR SELL???$$$$'
    });
});

module.exports = router;


