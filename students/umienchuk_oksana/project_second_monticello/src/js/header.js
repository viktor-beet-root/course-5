import $ from 'jquery';

const menuOpenButton = document.querySelector('.menu-open-btn');
let menuOpenVisible = false;

const parentElement = menuOpenButton.parentElement;

const menuHeader = $('.menu');
let isOpenMenu = false;

menuOpenButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (menuOpenVisible) {
        parentElement.classList.add('_open');
    } else {
        parentElement.classList.remove('_open');
    }

    menuOpenVisible = !menuOpenVisible;
});


const header = $('.header');
const headerHeight = header.outerHeight(true);
const secondSectionOffset = $('.hero').outerHeight(true);
const offset = 20;
const offsetBgHeader = secondSectionOffset - headerHeight - offset;
const heroButtonUp = $('.scroll-to-top');

let isHeaderBg = false;

$(window).on('scroll', function () {

    if ($(this).scrollTop() > offsetBgHeader && !isHeaderBg) {
        header.addClass('bg-scroll');
        heroButtonUp.addClass('bg-scroll');
        isHeaderBg = true;
    } else if ($(this).scrollTop() < offsetBgHeader && isHeaderBg) {
        header.removeClass('bg-scroll');
        heroButtonUp.removeClass('bg-scroll');
        isHeaderBg = false;
    }
})
