var _ = require("underscore");
var Utilities = require("../../util");

var Goods_Controller = function () {};

Goods_Controller.prototype = {};

Goods_Controller.NavIndex = Utilities.Nav.Goods;

// 公共
Goods_Controller.NavPage = {
    Nav: Utilities.Nav,
    index: Goods_Controller.NavIndex
};

// 商品设置
Goods_Controller.renderGoodsSettings = function (req, res) {
    res.render('goods/goods_settings', {
        page: Goods_Controller.NavPage
    })
};

// 商品设置提交
Goods_Controller.submitGoodsSettings = function (req, res) {
};

// 商品进销存管理
Goods_Controller.renderGoodsStockManagement = function (req, res) {
    res.render('goods/goods_stock_management', {
        page: Goods_Controller.NavPage,
        goods: [{
            id: 1,
            good_no: "GD10002",
            good_name: "羽毛球拍",
            good_count: 11,
            good_price: "100.00",
            discount_price: "95.00",
            good_state: 1
        }, {
            id: 2,
            good_no: "GD10001",
            good_name: "农夫山泉矿泉水",
            good_count: 1100,
            good_price: "2.50",
            discount_price: "2.00",
            good_state: 2
        }, {
            id: 3,
            good_no: "GD10003",
            good_name: "溜冰鞋",
            good_count: 11,
            good_price: "182.00",
            discount_price: "175.00",
            good_state: 3
        }]
    });
};

// 商品详情
Goods_Controller.renderGoodsStockView = function (req, res) {
    res.render('goods/goods_stock_view', {
        page: Goods_Controller.NavPage
    })
};

// 商品销售
Goods_Controller.renderGoodsMarket = function (req, res) {
    res.render('goods/goods_market', {
        page: Goods_Controller.NavPage
    })
};

// 商品购车
Goods_Controller.renderGoodsCarts = function (req, res) {
    res.render('goods/goods_carts', {
        page: Goods_Controller.NavPage
    })
};

module.exports = Goods_Controller;
