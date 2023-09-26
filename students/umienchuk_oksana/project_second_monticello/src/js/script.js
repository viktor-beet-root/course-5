import $ from 'jquery';
import 'slick-carousel';
$('.slider').slick({
    arrows: false,
    dots: true,
    draggable: true,
    speed: 500,
    easing: 'easeInOutCubic',
    vertical: true,
    verticalSwiping: true,
});

$('.news-slider').slick({
    arrows: true,
    dots: true,
    draggable: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    easing: 'easeInOutCubic',
});
