$('.reviews__sub-img').click(function(){
    $('.reviews__item').removeClass('active');
    $(this).closest('.reviews__item').addClass('active');
});

let slidersArr = [];

function desktopSlider() {
    for (i = 0; i < 8; i++) {
        let elem = $('.reviews__item_' + i);
        slidersArr.push(elem);
    }
    console.log(slidersArr);
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
            variableWidth: true
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


