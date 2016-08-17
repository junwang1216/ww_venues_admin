var Users_Controller = function () {};

Users_Controller.prototype = {};

Users_Controller.renderUsersMembers = function (req, res) {
    res.render('users/users_members');
};

Users_Controller.renderUsersMembersAdd = function (req, res) {
    res.render('users/users_members_add');
};

module.exports = Users_Controller;
