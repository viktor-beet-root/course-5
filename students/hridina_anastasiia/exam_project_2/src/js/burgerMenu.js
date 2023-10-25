import $ from 'jquery';

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

export default menu;
