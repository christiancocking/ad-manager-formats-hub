var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.setHeader('Accept-CH', 'Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA, Sec-CH-UA-Arch, Sec-CH-UA-Arch, Sec-CH-UA-Bitness')
  //res.setHeader('Permissions-Policy', 'ch-ua-model=*,ch-ua-platform-version=*,sec-ch-ua-platform-version=*,sec-ch-ua-bitness=*,sec-ch-ua-arch=*, sec-ch-ua-bitness=*')
  //res.setHeader('Permissions-Policy', 'ch-ua-model=*,ch-ua-platform-version=*,ch-ua-arch=*,ch-ua-model=*,ch-ua-arch=*,ch-ua-bitness=*,ch-ua-model=*')
  res.setHeader('Permissions-Policy', 'ch-ua-model=*,ch-ua-platform-version=*,ch-ua=*,ch-ua-mobile=*,ch-ua-platform=*,ch-ua-full-version-list=*,ch-ua-arch=*,ch-ua-bitness=*,ch-ua-model=*')
  next()
})
app.use('/', indexRouter);

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
