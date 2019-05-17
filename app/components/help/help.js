$('.help__left-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.help__right-slider',
    dots: true,
    arrows: true,
    prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="help__prev" width="55" height="48" viewBox="0 0 55 48"><g><g><path fill="#ccc4b3" d="M0 23h.548L21.435.154l1.414 1.412L3.255 23H55v2H3.257l19.592 21.434-1.414 1.415L.549 25.001H0z"/></g></g></svg>',
    nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="help__next" width="55" height="48" viewBox="0 0 55 48"><g><g><path fill="#ccc4b3" d="M0 23h.548L21.435.154l1.414 1.412L3.255 23H55v2H3.257l19.592 21.434-1.414 1.415L.549 25.001H0z"/></g></g></svg>'
});

$('.help__right-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.help__left-slider',
    dots: false,
    arrows: false,
    fade: true
});