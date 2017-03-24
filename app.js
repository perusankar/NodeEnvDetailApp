var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var swaggerJSDoc = require('swagger-jsdoc');

var envs = require('./routes/envs');
var users = require('./routes/users');

var dbName = 'PERU';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Environment API Doc',
    version: '1.0.0',
    description: 'Environment RESTful API Doc',
  },
  host: 'localhost:'+app.get('port'),
  basePath: "/",
  swagger: "2.0",
  paths: { },
  definitions: { },
  responses: { },
  parameters: { },
  securityDefinitions: { }
};
var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.js'],
};
var swaggerSpec = swaggerJSDoc(options);

require('./config/passport')(passport);

//app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/api', envs);
app.use('/user', users);
app.use(express.static('public'));
app.use('/login',express.static('public'));
app.use('/home',express.static('public'));
app.use('/register',express.static('public'));

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

 app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });

module.exports = app;
