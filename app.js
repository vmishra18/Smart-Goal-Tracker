var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require("body-parser");
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require('jquery')(dom.window);
var request = require("request");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trainRouter = require('./routes/train');


;
var app = express();

app.use(express.static("public"));

// view engine setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/train', trainRouter);

app.get('/', function(req, res) {
   res.render('index', { });
});
app.get('/users/goal', function(req, res) {
   res.render('goal', { });
});
app.get('/training', function(req, res) {
   res.render('training', { });
});
app.get('/graph', function(req, res) {
   res.render('graph', { });
});





app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var server = http.createServer(app).listen(4000,function(){
    console.log("We have started our server on port 4000");
});

module.exports = app;
