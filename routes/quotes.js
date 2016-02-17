'use strict';
const express = require('express');
const router = express.Router();


// respond with "Welome investors" for the first page or default page
router.get('/', (req, res) => {
    res.render('quotes');
});

module.exports = router;


