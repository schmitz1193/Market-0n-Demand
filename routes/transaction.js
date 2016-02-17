//ROUTES - transaction.js

'use strict';
const express = require('express');
const router = express.Router();
const transactionCtrl = require('../controllers/transaction');


// transaction buy or sell stock
// route to controller (.index) to display initial screen comes back (.new) with buy or sell
router.get('/T', transactionCtrl.index).post('/T', transactionCtrl.index);

module.exports = router;


