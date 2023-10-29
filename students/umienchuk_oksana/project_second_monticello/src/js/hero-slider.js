
import $ from 'jquery';
import 'slick-carousel';

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
            breakpoint: 768,
            settings: {
                // dots: false,
                // draggable: true,
                autoplay: true,
                verticalSwiping: false,
                autoplaySpeed: 2000,
                easing: 'easeInOutCubic',
            }
        },
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
        },

    ],
});
