var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var Ractive = require('ractive');

var routes = require('./routes/index');

var app = express();

/**
 * Register res.render function to use Ractive.
 * @param  {String}   filePath Path of file to render
 * @param  {Object}   options  Options passed from res.render
 * @param  {Function} callback Some express callback
 * @return {String}            Output buffer
 */
app.engine('ractive', function(filePath, options, callback){
  fs.readFile(filePath, { encoding: 'utf-8' }, function(err, content){
    if (err) throw new Error(err);

    var params = {};

    // if there is a layout, then the content becomes the body
    if (options.layout) {
        params.template = fs.readFileSync(options.layout, { encoding: 'utf-8' });
        params.partials = { body: content }; // TODO: extend options.partials
    } else {
        params.template = content;
    }

    // if there is a model, use the model as the data
    if (options.model) {
        params.data = options.model;
    } else {
        params.data = options;
    }

    return callback(null, new Ractive(params).toHTML());
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ractive');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
