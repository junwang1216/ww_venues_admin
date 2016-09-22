(function ($) {
    var ajaxLock = false;
    $("#save_card_type").on("click", function (e) {
        e.preventDefault();

        var conditions = $("#card_type_form").serialize();

        if (ajaxLock) {
            return false;
        }
        ajaxLock = true;

        $.post('/users/submitMembersCategory', conditions, function (res) {
            if (res.status == 200) {
                location.reload();
            } else {
                alert("保存失败");
                ajaxLock = false;
            }
        });
    });

    // 卡类型详情
    $(".card-type-list").on("click", ".type-item", function (e) {
        e.preventDefault();

        var id = $(this).attr("data-id");

        $.post('/users/membersCategory/' + id, {}, function (res) {
            if (res.status == 200) {
                $("#card_type_name").val(res.data.card_type_name);
                $("#card_type_month").val(res.data.card_type_name);
                $("#card_type_time_start").val(res.data.card_type_time_start);
                $("#card_type_time_end").val(res.data.card_type_time_end);
                $("#card_type_discount").val(res.data.card_type_discount);
                $("#card_type_money").val(res.data.card_type_money);
            } else {
                alert("查询失败");
                ajaxLock = false;
            }
        });
    });
})(jQuery);
