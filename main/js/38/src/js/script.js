import Masonry from 'masonry-layout';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

setTimeout(function () {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20
    });
}, 1000)
