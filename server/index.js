'use strict'

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

const config = require('./config/index.json');

require('./models').connect(config.dbUri);

const router = require('./routes/index.js');

var path = require('path');

app.use(bodyParser.json({limit:1024102420,type: '*/*' }));
app.use(express.static(path.join(__dirname, 'public')));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

module.exports = app;
