import $ from 'jquery';

const menuOpenButton = document.querySelector('.menu-open-btn');

console.log(menuOpenButton);
let menuOpenVisible = false;

const parentElement = menuOpenButton.parentElement;
console.log(parentElement);

const menuHeader = $('.menu');
let isOpenMenu = false;

menuOpenButton.addEventListener('click', function (event) {
    // console.log(menuOpenVisible);
    event.preventDefault();

    if (menuOpenVisible) {
        parentElement.classList.add('_open');
    } else {
        parentElement.classList.remove('_open');
    }

    menuOpenVisible = !menuOpenVisible;
});


console.log($('.hero').offset());
const header = $('.header');
const headerHeight = header.outerHeight(true);
const secondSectionOffset = $('.hero').outerHeight(true);
const offset = 20;
const offsetBgHeader = secondSectionOffset - headerHeight - offset;

let isHeaderBg = false;
console.log(secondSectionOffset)
$(window).on('scroll', function () {
    // console.log($(this).scrollTop(), offsetBgHeader)
    if ($(this).scrollTop() > offsetBgHeader && !isHeaderBg) {
        console.log(111);
        header.addClass('bg-scroll');
        isHeaderBg = true;
    } else if ($(this).scrollTop() < offsetBgHeader && isHeaderBg) {
        header.removeClass('bg-scroll');
        console.log(222);
        isHeaderBg = false;
    }
})

// const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.25,
// };
// const callback = function (entries, observer) {
//     entries.forEach((entry) => {

//         if (entry.boundingClientRect.top < 0 && !entry.isIntersecting && !isHeaderBg) {
//             header.addClass('bg-scroll');
//             // !isHeaderBg = true;
//             return;
//         }

//         if (entry.boundingClientRect.top < 0 && entry.isIntersecting && isHeaderBg) {
//             header.remove('bg-scroll');
//             // !isHeaderBg = false;
//             return;
//         };
//     })
// };

// const observer = new IntersectionObserver(callback, options);

// const target = document.querySelector('.hero');
// observer.observe(target);

// menuHeader.on('transitionend', function () {

//     if (!isOpenMenu) {
//         menuHeader.css({ display: '' });
//     }
// });

// $(menuOpenButton).noConflict('click', function (e) {
//     e.preventDefault();

//     if (!isOpenMenu) {
//         menuHeader.css({ display: 'flex' });

//         setTimeout(function () {
//             $(this).closest('.menu-wrapper').toggleClass('_open', !isOpenMenu);

//             isOpenMenu = true;
//         }.bind(this), 0);

//         return;
//     }

//     $(this).closest('.menu-wrapper').toggleClass('_open', !isOpenMenu);

//     isOpenMenu = false;
// });



