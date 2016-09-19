var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var useragent = require('express-useragent');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var routes = require('./routes');
var conf = require('./conf')();
var app = express();

// view engine setup
swig.setDefaults({varControls: ['<%=', '%>']});
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, conf.production ? 'views-dist' : 'views'));
app.set('view engine', 'html');

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false});
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
// post数据量限制
app.use(bodyParser.urlencoded({ extended: false, limit: 100 * 1024 * 1024 * 1024 }));
app.use(cookieParser());
//app.use(session());
app.use(session({
    secret: 'wanwei_sports_session',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true
    }/*,
    store: new RedisStore({
        host: conf.redis_host,
        port: conf.redis_port,
        ttl: 60 * 60 * 24 * 3, // session 3天有效
        disableTTL: false
    })*/
}));

if (conf.production) {
    app.use("/public", express.static(path.join(__dirname, 'public-dist')));
} else {
    app.use(require('stylus').middleware({src: path.join(__dirname, ''), compress: true}));
    app.use("/public", express.static(path.join(__dirname, 'public')));
}

// routers
app.use(useragent.express());
app.use('/', routes.root);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
