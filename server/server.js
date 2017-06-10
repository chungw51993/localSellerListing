var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));

var listRoute = require('./routes/listController');
var itemRoute = require('./routes/itemController');

app.use('/api/list', listRoute);
app.use('/api/item', itemRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is listening on port 8000!');
});