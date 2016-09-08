var Passport = require('../../model/Passport');

var Passport_Controller = function () {};

Passport_Controller.prototype = {};

Passport_Controller.authLogin = function (req, res, next) {
    var user = req.session.auth_user;

    if (!user) {
        return res.redirect('/pp/login?return_url=' + req.originalUrl);
    }

    next();
};

// 渲染登录页面
Passport_Controller.renderPassportLogin = function (req, res) {
    var returnUrl = req.query.return_url || "/";

    res.render('passport/login', {
        return_url: returnUrl,
        user: req.session.auth_user || {}
    });
};

// 提交登录
Passport_Controller.submitPassportUserLogin = function (req, res) {
    var conditions = req.body;

    Passport.userLogin(conditions, function (err, result) {
        if (err) {
            console.error(err);
            return res.json({status: 500, message: err});
        }

        if (result.length > 0) {
            req.session.auth_user = result[0];
            Passport.updateSalesManTime(result[0], function () {});
            return res.json({status: 200, message: "OK", user: result[0]});
        } else {
            return res.json({status: 500, message: []});
        }
    });
};

module.exports = Passport_Controller;
