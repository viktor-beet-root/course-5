import $ from "jquery";
import JustValidate from 'just-validate';
import "slick-carousel";
import { Fancybox } from "@fancyapps/ui";

const body = $("html, body");

Fancybox.bind();

$('.hero-slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
});

$('.news__row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    adaptiveHeigh: true,
    infinite: true,
    variableWidth: true,
    prevArrow: `<button type="button" class="slick-prev"><svg class="icon">
    <use xlink:href="#arrow"></use></svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg class="icon">
    <use xlink:href="#arrow"></use></svg></button>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 1024,
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


// burger menu
const menu = $('.menu__list');
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
            $(this).closest('.menu').toggleClass('_open', !isOpenMenu);

            isOpenMenu = true;
        }.bind(this), 0);
        return;
    }

    $(this).closest('.menu').toggleClass('_open', !isOpenMenu);

    isOpenMenu = false;
})


// bg-menu-scroll
const header = $('.header');

let isHeaderBg = false;

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
const target = document.querySelector('.hero');
observer.observe(target);


// smooth scroll (menu)


function smoothScrollMenu() {

    $('.menu__link').on('click', function (e) {
        e.preventDefault();

        const switchToSection = $(this).attr('href');

        body.animate({
            scrollTop: $(switchToSection).offset().top
        }, 1000);
    });
}

smoothScrollMenu();



//smoothScrollDown

function smoothScrollDown() {

    $('.smoothScrollDown__link').on('click', function (e) {
        e.preventDefault();
        const ScrollDown = $(this).attr('href');

        body.animate({
            scrollTop: $(ScrollDown).offset().top
        }, 1000);
    });
}

smoothScrollDown();



// scrolltotop-btn
const scrollToTopBtn = document.querySelector('.scroll-to-top');

const optionsScroll = {
    root: null,
    rootMargin: "0px",
    threshold: .8,
};

const scrollToTop = function (entries, scrollObserver) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scrollToTopBtn.style.display = 'none'

        } else {
            scrollToTopBtn.style.display = 'block';
        }
    })
};

const scrollObserver = new IntersectionObserver(scrollToTop, optionsScroll);
const scrollTarget = document.querySelector('.hero');

scrollObserver.observe(scrollTarget);


// galleryBtn
const openGalleryBtn = document.getElementById('openGalleryBtn');
const images = document.querySelectorAll('.item_hidden');
let isHidden = true;

openGalleryBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (isHidden) {
        images.forEach(item => item.classList.remove('_hidden'));
    } else {
        images.forEach(item => item.classList.add('_hidden'));
    }

    openGalleryBtn.textContent = isHidden ? 'See Less' : 'See More';

    isHidden = !isHidden;
});



//form-validation
const getInTouchForm = document.getElementById('contacts-form');

function contactFormValidation(form) {
    const validator = new JustValidate(form, getUserData);
    validator.addField('[name="name"]', [
        {
            rule: 'required',
            errorMessage: 'This field must be filled',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'The field must contain at least 2 letters',
        },
        {
            rule: 'customRegexp',
            value: /[a-z, A-Z]/gi,
            errorMessage: 'Must contain the following characters: [a-z, A-Z]',
        },
    ]).addField('[name="email"]', [
        {
            rule: 'required',
            errorMessage: 'This field must be filled'
        },
        {
            rule: 'email',
            errorMessage: 'Does not match the email format'
        },
    ]);

    validator.onSuccess((e) => {
        getUserData(new FormData(e.target));
    })
}

function getUserData(data) {
    const userData = Object.fromEntries([...data]);
}


contactFormValidation(getInTouchForm, getUserData);


// change place (Media Queries)

