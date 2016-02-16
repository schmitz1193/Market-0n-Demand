'use strict';
const express = require('express');
const app = express();
//const app = require('express')();
//const bodyParser = require('body-parser');  //process for forms
//const mongoose = require('mongoose');
const path = require('path');
//const routes = require('./routes/');  //slash as the end indicated you look in index first
const sassMiddleware = require('node-sass-middleware');
const PORT = process.env.PORT || 3000;  //set up environment port if none given default to 3000
app.set('view engine', 'jade');  //set up engine to compile JADE


//app.use(bodyParser.urlencoded({ extended: false }));  //urlencoded parse url
//app.use(bodyParser.json()); //parse json
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);  //allows you to use the diferent routes

//SASS set up
app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

app.locals.title = 'MARKET ON DEMAND';

// respond with "hello investors" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.render('index', {
      msg: 'Welcome Investors!!!$$$$'
    });
});

app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
