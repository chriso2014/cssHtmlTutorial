var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var app = express();

var app = express();
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
  { src: __dirname + '/public',
    compile: compile
  }
));

app.get('/', function (req, res) {
  res.end('Hi there!');
});
app.listen(3000);
