
import $ from 'jquery';
import 'slick-carousel';
console.log($);

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
            breakpoint: 992,
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
