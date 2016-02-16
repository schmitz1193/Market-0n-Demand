'use strict';

const app = require('express')();
//const bodyParser = require('body-parser');  //process for forms
//const mongoose = require('mongoose');

//const routes = require('./routes/');  //slash as the end indicated you look in index first
//const path = require('path');
const PORT = process.env.PORT || 3000;  //set up environment port if none given default to 3000

app.locals.title = 'MARKET ON DEMAND';

// respond with "hello investors" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello investors');
});

app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
