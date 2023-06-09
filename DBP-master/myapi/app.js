var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/Signup');
var loginRouter = require('./routes/Login');
var createcompanyRouter = require('./routes/CreateCompany');
var GetDealerProfileRouter = require('./routes/GetDealerProfile');
var UpdateDealerProfileRouter = require('./routes/UpdateDealerProfile');
var GetMaxIdUserRouter = require('./routes/GetMaxIdUser');
var GetMaxIdAddressRouter = require('./routes/GetMaxIdAddress');
var GetCompanyTypeIdRouter = require('./routes/GetCompanyTypeId');
var UpdateDealerAddressRouter = require('./routes/UpdateDealerAddress');
var UpdateDealerAccountRouter = require('./routes/UpdateDealerAccount');
var GetCompanyProfileRouter = require('./routes/GetCompanyProfile');
var UpdateCompanyAddressRouter = require('./routes/UpdateCompanyAddress');
var UpdateCompanyAccountRouter = require('./routes/UpdateCompanyAccount');
var UpdateCompanyProfileRouter = require('./routes/UpdateCompanyProfile');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var app = express();
var cors=require('cors');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Signup',signupRouter)
app.use('/Login',loginRouter)
app.use('/CreateCompany',createcompanyRouter);
app.use('/GetDealerProfile',GetDealerProfileRouter);
app.use('/UpdateDealerProfile',UpdateDealerProfileRouter);
app.use('/GetMaxIdUser',GetMaxIdUserRouter);
app.use('/GetMaxIdAddress',GetMaxIdAddressRouter);
app.use('/GetCompanyTypeId',GetCompanyTypeIdRouter);
app.use('/UpdateDealerAddress',UpdateDealerAddressRouter);
app.use('/UpdateDealerAccount',UpdateDealerAccountRouter);
app.use('/GetCompanyProfile',GetCompanyProfileRouter);
app.use('/UpdateCompanyAddress',UpdateCompanyAddressRouter);
app.use('/UpdateCompanyAccount',UpdateCompanyAccountRouter);
app.use('/UpdateCompanyProfile',UpdateCompanyProfileRouter);



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