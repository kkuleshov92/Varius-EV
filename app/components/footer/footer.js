$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.go-top-btn').css('display','block');
    } else {
        $('.go-top-btn').css('display','none');
    }
});