var Passport_Controller = function () {};

Passport_Controller.prototype = {};

// 渲染登录页面
Passport_Controller.renderPassportLogin = function (req, res) {
    res.render('passport/login', {
        return_url: "/"
    });
};

// 提交登录
Passport_Controller.submitPassportUserLogin = function (req, res) {
    var returnUrl = req.query.return_url || "/";

    res.redirect(returnUrl);
};

module.exports = Passport_Controller;
