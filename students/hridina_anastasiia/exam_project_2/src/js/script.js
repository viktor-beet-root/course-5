import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
import button from './galleryButton.js';
import createFormValidation from './formValidation.js';


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
    pauseOnHover: false,
    verticalSwiping: false,
    arrows: false,
    vertical: true,
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: true
});


$('.article-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 694,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});

const menu = $('.menu');
let isOpenMenu = false;

menu.on('transitionend', function () {
    if (!isOpenMenu) {
        menu.css({ display: '' });
    }
});

$('.menu-open-btn').on('click', function (e) {
    e.preventDefault();

    if (!isOpenMenu) {
        menu.css({ display: 'flex' });

        setTimeout(function () {
            $(this).closest('.menu-wrapper').toggleClass('_open', !isOpenMenu);

            isOpenMenu = true;
        }.bind(this), 0);

        return;
    }

    $(this).closest('.menu-wrapper').toggleClass('_open', !isOpenMenu);

    isOpenMenu = false;
});


const header = $('.header');
const headerHeight = header.outerHeight(true);
const secondSectionOffset = $('.two').offset().top;
const offset = 20;
const offsetBgHeader = secondSectionOffset - headerHeight - offset;

let isHeaderBg = false;

// $(window).on('scroll', function () {
//     if ($(this).scrollTop() > offsetBgHeader && !isHeaderBg) {
//         header.addClass('bg-header');
//         isHeaderBg = true;
//     } else if ($(this).scrollTop() < offsetBgHeader && isHeaderBg) {
//         header.removeClass('bg-header');
//         isHeaderBg = false;
//     };
// });


const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
};

const callback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.boundingClientRect.top < -20 && !entry.isIntersecting && !isHeaderBg) {
            header.addClass('bg-header');
            isHeaderBg = true;

            return;
        }

        if (entry.boundingClientRect.top < -20 && entry.isIntersecting && isHeaderBg) {
            header.removeClass('bg-header');
            isHeaderBg = false;
        }
    })
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".menu");

observer.observe(target);


const body = $("html, body");

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();

    body.stop().animate({ scrollTop: 0 }, 200);
});


lightbox.option({
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    resizeDuration: 700,
    wrapAround: false,
    positionFromTop: 50,
    disableScrolling: true,
    showImageNumberLabel: false
});
