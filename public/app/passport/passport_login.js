(function ($) {
    var ajaxLock = false;
    $(".login-btn").on("click", function (e) {
        e.preventDefault();

        var conditions = $("#login_form").serialize();

        if (ajaxLock) {
            return false;
        }
        ajaxLock = true;

        $.post('/pp/userLogin', conditions, function (res) {
            if (res.status == 200) {
                location.assign($('[name="return_url"]').val());
            } else {
                alert("登录失败")
            }
        });
    });
})(jQuery);
