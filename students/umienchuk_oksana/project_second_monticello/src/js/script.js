import $ from 'jquery';
import 'slick-carousel';
$('.slider').slick({
    arrows: false,
    dots: true,
    draggable: true,
    speed: 100,
    easing: 'easeInOutCubic',
    vertical: true,
    verticalSwiping: true,
});
