'use strict';

const express = require('express');
const router = express.Router();

const portfolio = require('./portfolio');
const quotes = require('./quotes');
const transaction = require('./transaction');

router.use(portfolio);
router.use(quotes);
router.use(transaction);

module.exports = router;

