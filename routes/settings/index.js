var _ = require("underscore");
var Utilities = require("../../util");

var Settings_Controller = function () {};

Settings_Controller.prototype = {};

Settings_Controller.NavIndex = Utilities.Nav.Settings;

// 公共
Settings_Controller.NavPage = {
    Nav: Utilities.Nav,
    index: Settings_Controller.NavIndex
};

// 基础信息设置
Settings_Controller.renderSettingsCommon = function (req, res) {
    res.render('settings/settings_common', {
        page: Settings_Controller.NavPage
    });
};

// 通知设置
Settings_Controller.renderSettingsNotification = function (req, res) {
    res.render('settings/settings_notification', {
        page: Settings_Controller.NavPage,
        members: [{
            member_id: 1,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000001",
            member_status: 1
        }, {
            member_id: 2,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000002",
            member_status: 1
        }, {
            member_id: 3,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000003",
            member_status: 1
        }, {
            member_id: 4,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000004",
            member_status: 1
        }, {
            member_id: 5,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000005",
            member_status: 2
        }, {
            member_id: 6,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000006",
            member_status: 1
        }, {
            member_id: 7,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000007",
            member_status: 1
        }, {
            member_id: 8,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000008",
            member_status: 2
        }, {
            member_id: 9,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD00000009",
            member_status: 1
        }, {
            member_id: 10,
            member_name: "李洪旭",
            member_mobile: "11012345678",
            member_idcard: "123456789987654321",
            card_id: "FD000000010",
            member_status: 1
        }],
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        }
    });
};

module.exports = Settings_Controller;
