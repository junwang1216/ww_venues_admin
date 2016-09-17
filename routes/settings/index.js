var Settings_Controller = function () {};

Settings_Controller.prototype = {};

// 基础信息设置
Settings_Controller.renderSettingsCommon = function (req, res) {
    res.render('settings/common');
};

module.exports = Settings_Controller;
