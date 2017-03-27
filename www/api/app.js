var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');
var User = require('./models/userModel');

var app = express();

var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);
userRouter = require('./Routes/userRoutes')(User);

app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);

app.get('/', function(req, res){
  res.send('welcome to my app!');
})

app.listen(port, function(err) {
  console.log('Runnung server on port ' + port)
})
9
