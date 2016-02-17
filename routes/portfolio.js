'use strict';

const express = require('express');
const router = express.Router();

// transaction buy or sell stock
router.get('/P', (req, res) => {
    res.render('portfolio', {
      msg: 'PORTFOLIO--HOW MUCH $$$$ ????'
    });
});

module.exports = router;

