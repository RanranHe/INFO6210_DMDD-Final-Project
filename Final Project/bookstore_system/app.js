var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');
var orderRouter = require('./routes/order');
var bookRouter = require('./routes/book');
var authorRouter = require('./routes/author');
var categoryRouter = require('./routes/category');
var publisherRouter = require('./routes/publisher');
var locationRouter = require('./routes/location');
var customerRouter = require('./routes/customer');
var employeeRouter = require('./routes/employee');
var timesheetRouter = require('./routes/timesheet');
var periodRouter = require('./routes/period');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', orderRouter);
app.use('/', bookRouter);
app.use('/', authorRouter);
app.use('/', categoryRouter);
app.use('/', publisherRouter);
app.use('/', locationRouter);
app.use('/', customerRouter);
app.use('/', employeeRouter);
app.use('/', timesheetRouter);
app.use('/', periodRouter);

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
