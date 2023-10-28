import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import button from './galleryButton.js';
import createFormValidation from './formValidation.js';
import lightbox from 'lightbox2';
import callbackBtn from './scrollBtn.js';
import menu from './burgerMenu.js';
import header from './fixedNavbar.js';


const addForm = document.querySelector('.form');

createFormValidation(addForm, getUserInfo);

function getUserInfo(data) {
    const userInfo = Object.fromEntries([...data]);
}


$(".hero-slider").slick({
    dots: true,
    slidesToShow: 1,
    slideToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
    verticalSwiping: false,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true
});


$('.article-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 694,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 625,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        }
    ]
});


//scroll

const body = $("html, body");

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();

    body.stop().animate({ scrollTop: 0 }, 200);
});


//lightbox

window.lightbox = lightbox;

window.lightbox.option({
    fadeDuration: 600,
    imageFadeDuration: 600,
    resizeDuration: 700,
    wrapAround: true,
    positionFromTop: 50,
    disableScrolling: true,
    showImageNumberLabel: false
});


