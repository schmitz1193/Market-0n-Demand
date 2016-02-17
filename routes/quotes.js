//ROUTES - quotes.js

'use strict';
const express = require('express');
const router = express.Router();
const quotesCtrl = require('../controllers/quotes');


//route to controller (.index) to display initial screen comes back (.new) with quotes
router.get('/', quotesCtrl.index).post('/', quotesCtrl.new);

module.exports = router;



