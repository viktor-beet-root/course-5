import $ from 'jquery';
import 'slick-carousel';
import 'jquery-ui';

const menu = $('#menu');

menu.addClass('tttt');

menu.attr('title', 'asdfasfdasdfdasfa');

console.log(menu.children());
console.log(menu.find('a').addClass('asdfsdfsdfdf'));

$('a').css('color', 'red');
$(document.body).append('<div>dsfsdfsdf</div>');
// document.querySelectorAll('a').forEach((item) => {
//     item.style.color = '#999';
// })

console.log($('#menu').hasClass('tttt'));

let isFixsed = false;
$(window).on('scroll.beetroot', function () {
    console.log(234234)
})
$(window).on('scroll.beetroot', function () {
    if ($(this).scrollTop() > 300 && !isFixsed) {
        console.log(1111)
        $(document.body).css('padding-top', menu.outerHeight(true));

        menu.css({
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            "background-color": 'white'
        });
        isFixsed = true;
    } else if ($(this).scrollTop() <= 300 && isFixsed) {
        console.log(22222)
        $(document.body).css('padding-top', '');
        menu.css(
            'position', 'static',
        );
        isFixsed = false;
    }
});

$(window).off('.beetroot');

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<button type="button" class="my-next">Next</button>'
});

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(event, slick, currentSlide, nextSlide);
});

setTimeout(function () {
    $('.slide').slick('slickGoTo', 4);
    console.log(111)
}, 5000)
