
import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import './gallery';
import './header';

$('.hero-slider').slick({
    arrows: false,
    dots: true,
    draggable: true,
    speed: 500,
    easing: 'easeInOutCubic',
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                // dots: false,
                // draggable: false,
                // vertical: false,
                verticalSwiping: false,
                autoplay: true,
                autoplaySpeed: 2000,
                easing: 'easeInOutCubic',
            }
        }],
});

$('.news-slider').slick({
    arrows: true,
    dots: true,
    draggable: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    easing: 'easeInOutCubic',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                draggable: false,
                autoplay: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false,
                autoplay: true,
            }
        }
    ]
});

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
});



// $('.menu-open-btn').on('click', function (e) {
//     e.preventDefault()
//     console.log($(this));
//     $(this).closest('.menu-wrapper').toggleClass('_open');
// });
