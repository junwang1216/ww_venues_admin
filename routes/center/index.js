var _ = require("underscore");
var Utilities = require("../../util");

var Center_Controller = function () {};

Center_Controller.prototype = {};

Center_Controller.NavIndex = Utilities.Nav.Center;

// 公共
Center_Controller.NavPage = {
    Nav: Utilities.Nav,
    index: Center_Controller.NavIndex
};

// 个人信息
Center_Controller.renderCenterProfileComplete = function (req, res) {
    res.render('center/center_profile_complete', {
        page: Center_Controller.NavPage,
        user: {
            user_name: "李洪旭",
            user_mobile: "11087564321",
            user_idcard: "123456789123456789"
        }
    });
};

// 提交个人信息
Center_Controller.submitCenterProfileComplete = function (req, res) {
    res.json({
        status: 200
    });
};

// 修改密码
Center_Controller.renderCenterPasswordModification = function (req, res) {
    res.render('center/center_password_modification', {
        page: Center_Controller.NavPage
    });
};

// 提交修改密码
Center_Controller.submitCenterPasswordModification = function (req, res) {
    res.json({
        status: 200
    });
};


module.exports = Center_Controller;
