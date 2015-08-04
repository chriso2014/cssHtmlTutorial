var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var path = require('path');
var app = express();

app.set('views', __dirname + '/views');
app.set('public', __dirname + '/public');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

function compile(str, path){
  return stylus(str)
  .set('filename', path)
  .set('compress', true)
  .use(nib());
}

app.use(stylus.middleware({
  src: __dirname + '/resources',
  dest: __dirname + '/public',
  debug: true,
  force: true
}));

app.get('/', function (req, res) {
  res.render('index',
   { title : 'Introduction to the course', pagenumber : 0 }
  );
});
app.get('/1', function (req, res) {
  res.render('page-1',
   { title : 'Basic HTML structure', pagenumber : 1 }
  );
});
app.get('/2', function (req, res) {
  res.render('page-2',
   { title : 'HTML elements', pagenumber : 2 }
  );
});
app.get('/3', function (req, res) {
  res.render('page-3',
   { title : 'HTML layout', pagenumber : 3 }
  );
});
app.get('/4', function (req, res) {
  res.render('page-4',
   { title : 'CSS Introduction', pagenumber : 4 }
  );
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
