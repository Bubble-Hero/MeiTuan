var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var indexSliderRouter = require('./routes/indexSliderImg');

var nearlistRouter = require('./routes/nearlist');

var nearchildRouter = require('./routes/nearchild');

var ordernavRouter = require('./routes/ordernav');

var indexMenuRouter = require('./routes/indexMenu');

var findDataRouter = require('./routes/findData');

var meDataRouter = require('./routes/meData');

var indexNav=require('./routes/indexNav')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/indexSlider', indexSliderRouter);

app.use('/nearlist', nearlistRouter);

app.use('/nearchild', nearchildRouter);

app.use('/ordernav', ordernavRouter);

app.use('/indexMenu', indexMenuRouter);

app.use('/findData',findDataRouter);

app.use('/meData',meDataRouter);

app.use('/indexNav',indexNav)


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

module.exports = app;
