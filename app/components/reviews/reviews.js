$('.reviews__sub-img').click(function(){
    $('.reviews__item').removeClass('active');
    $(this).closest('.reviews__item').addClass('active');
});

let slidersArr = [];

function desktopSlider() {
    for (i = 1; i < 9; i++) {
        let elem = $('.reviews__item_' + i);
        slidersArr.push(elem);
    }
}

desktopSlider();

$('.reviews__btn_prev').click(function(){
    let indexSlide = $('.reviews__item.active:eq()').index();
    $('.reviews__item').removeClass('active');
    if (indexSlide - 1 < 0) {
        $('.reviews__item_' + slidersArr.length).addClass('active');
    } else {
        $('.reviews__item_' + (indexSlide)).addClass('active');
    }
});

$('.reviews__btn_next').click(function(){
    let indexSlide = $('.reviews__item.active:eq()').index();
    $('.reviews__item').removeClass('active');
    if (indexSlide + 1 === slidersArr.length) {
        $('.reviews__item_1').addClass('active');
     } else {
         $('.reviews__item_' + (indexSlide + 2)).addClass('active');
     }
});

let slider1 = $('.reviews__list');

function initSlider(slider, options) {
    slider.on('init', function () {
        setTimeout(function () {
            slider.addClass('is-ready');
        }, 100);
    });
    slider.not('.slick-initialized').slick(options);
}


function destroySlider(slider) {
    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}


function showSlider() {
    var tablet = ($(window).width()) < 1024;
    if (tablet) {
        initSlider(slider1, {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: true,
            centerMode: true,
            variableWidth: true,
            prevArrow: '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="48" viewBox="0 0 55 48"><g><g><path fill="#ccc4b3" d="M0 23h.548L21.435.154l1.414 1.412L3.255 23H55v2H3.257l19.592 21.434-1.414 1.415L.549 25.001H0z"/></g></g></svg></button>',
            nextArrow: '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="48" viewBox="0 0 55 48"><g><g><path fill="#ccc4b3" d="M0 23h.548L21.435.154l1.414 1.412L3.255 23H55v2H3.257l19.592 21.434-1.414 1.415L.549 25.001H0z"/></g></g></svg></button>'
        });

    } else {
        destroySlider(slider1);
    }
}
showSlider();
$(window).on('resize', showSlider);
//----------------------------------------slider end


$('.reviews__btns').click(function(){
   $(this).closest('.reviews__btns').siblings('.reviews__text').toggleClass('active');
});

$('.reviews__list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.reviews__text').removeClass('active');
});


