$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.go-top-btn').css('display','block');
        console.log('more');
    } else {
        $('.go-top-btn').css('display','none');
        console.log('less');
    }
});