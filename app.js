const dotenv = require('dotenv').config();
const express = require('express');
const errorhandler = require('errorhandler');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
var nodemailer = require('nodemailer');
var fs = require('fs');
var expressValidator = require('express-validator');




let app = express()
//app.use(express.static('../client'))


app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


app.post('/yelpSearch', routes.yelpSearch)




app.listen(process.env.PORT || 3000)