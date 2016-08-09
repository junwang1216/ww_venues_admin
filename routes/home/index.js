var Home_Controller = function () {};

Home_Controller.prototype = {};

Home_Controller.renderHomeIndex = function (req, res) {
    res.render('home/index');
};

module.exports = Home_Controller;
