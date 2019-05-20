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

    console.log(indexSlide);
});