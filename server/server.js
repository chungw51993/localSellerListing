var express = require('express');

var app = express();

require('./config/routes.js')(app, express);
app.use(express.static(__dirname + '/../client'));


app.listen(process.env.PORT || 8000, () => {
  console.log('Server is listening on port 8000!');
});

module.exports = app;