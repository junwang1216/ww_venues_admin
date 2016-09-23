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

// 用户设置
Settings_Controller.renderSettingsSystemUsers = function (req, res) {
    res.render('settings/settings_system_users', {
        page: Settings_Controller.NavPage,
        users: [{
            user_id: "32434",
            user_name: "李洪旭",
            user_account: "lihongxu123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }, {
            user_id: "32434",
            user_name: "陈小松",
            user_account: "chenxaisong123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }, {
            user_id: "32434",
            user_name: "李洪旭",
            user_account: "lihongxu123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 2
        }, {
            user_id: "32434",
            user_name: "陈小松",
            user_account: "chenxaisong123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }, {
            user_id: "32434",
            user_name: "李洪旭",
            user_account: "lihongxu123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }, {
            user_id: "32434",
            user_name: "陈小松",
            user_account: "chenxaisong123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 2
        }, {
            user_id: "32434",
            user_name: "李洪旭",
            user_account: "lihongxu123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }, {
            user_id: "32434",
            user_name: "陈小松",
            user_account: "chenxaisong123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }, {
            user_id: "32434",
            user_name: "陈小松",
            user_account: "chenxaisong123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 2
        }, {
            user_id: "32434",
            user_name: "李洪旭",
            user_account: "lihongxu123",
            user_department: "运营中心",
            user_role: "系统管理员",
            user_status: 1
        }],
        pagination: {
            index: 1,
            pageSize: 10,
            total: 143
        }
    });
};

// 用户设置详情编辑
Settings_Controller.renderSettingsSystemUsersView = function (req, res) {
    res.render('settings/settings_system_users_view', {
        page: Settings_Controller.NavPage
    });
};

// 用户设置详情添加
Settings_Controller.renderSettingsSystemUsersAdd = function (req, res) {
    res.render('settings/settings_system_users_view', {
        page: Settings_Controller.NavPage
    });
};

// 提交用户设置
Settings_Controller.submitSettingsSystemUsers = function (req, res) {
    res.redirect('/settings/systemUsers');
};

// 角色设置
Settings_Controller.renderSettingsSystemRoles = function (req, res) {
    res.render('settings/settings_system_roles', {
        page: Settings_Controller.NavPage,
        roles: [{
            role_id: "32434",
            role_name: "系统管理员",
            role_remark: "拥有全部的功能",
            role_status: 1
        }, {
            role_id: "32434",
            role_name: "运营专员",
            role_remark: "日常运营工作",
            role_status: 1
        }, {
            role_id: "32434",
            role_name: "财务经理",
            role_remark: "",
            role_status: 1
        }, {
            role_id: "32434",
            role_name: "运营值班经理",
            role_remark: "值班负责人",
            role_status: 1
        }]
    });
};

// 角色设置详情编辑
Settings_Controller.renderSettingsSystemRolesView = function (req, res) {
    res.render('settings/settings_system_roles_view', {
        page: Settings_Controller.NavPage
    });
};

// 角色设置详情添加
Settings_Controller.renderSettingsSystemRolesAdd = function (req, res) {
    res.render('settings/settings_system_roles_view', {
        page: Settings_Controller.NavPage
    });
};

// 提交角色设置
Settings_Controller.submitSettingsSystemRoles = function (req, res) {
    res.redirect('/settings/systemRoles');
};

// 系统功能模块
Settings_Controller.getSettingsSystemFunctionModules = function (req, res) {
    res.json({
        status: 200,
        data: []
    });
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
