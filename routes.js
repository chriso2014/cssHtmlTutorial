app.get('/', function (req, res) {
  res.render('index',
   { title : 'Introduction to the course', pagenumber : 1 }
  );
});
