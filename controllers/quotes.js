//CONTROLLERS - quotes.js

'use strict'

const quotesModel = require('../models/quotes');
const request = require('request')

//render the initial page (quotes.jade) for stock symbol input
module.exports.index = (req, res) => {
  res.render('quotes');
};


module.exports.new = (req,res) => {
  //Stock Quote API markit on demand
  const URL = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${req.body.symbol}`;
  request.get(URL, (err, response, body) => {
    if (err) throw err;
    console.log('body before ', body);
    body = JSON.parse(body);
    console.log('json parse body ', body);
    const returnQuote = {
      Name: body.Name,
      LastPrice: body.LastPrice,
      Change: body.Change
    }
    console.log('quote return ', returnQuote);

    res.render ('outputQuotes', {output: returnQuote});
    });
};



