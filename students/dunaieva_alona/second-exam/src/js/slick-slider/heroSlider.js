import $, { data } from 'jquery';

export default function heroSlider() {
    $('.hero-slider').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        // autoplay: true,
        pauseOnHover: false,
      });
}
