'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var winston = require('winston');
var app = express();

global.logger = winston;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.SHUD_LOG_TO_FILE) {
  logger.add(winston.transports.File, {filename: 'logs.log'});
}
logger.remove(winston.transports.Console);
logger.add(winston.transports.Console,
  {level: process.env.LOG_LEVEL || 'debug'});

app.get('/',
  function (req, res) {
    logger.info('Main page');
    res.sendFile(path.resolve('./public/views/home.html'));
  }
);

app.get('/env',
  function (req, res) {
    res.status(200).json({
      'API_URL': process.env.API_URL,
      'LOG_LEVEL': process.env.LOG_LEVEL,
      'SHUD_LOG_TO_FILE': process.env.SHUD_LOG_TO_FILE
    });
  }
);

app.use(
  function (req, res) {
    res.status(404);
    logger.error('Page not found');
    res.send('Page does not exist');
  }
);

var PORT = process.env.WWW_PORT || '80';

app.listen(PORT,
  function () {
    logger.info('micro-www running on port:', PORT);
  }
);
