import $, { data } from 'jquery';

const menuOpenButton = $('.menu-open-btn');
const navClass = ('.nav')
const addClassOpen = ('_open');

const menu = $('.menu');
let isOpenMenu = false;

menu.on('transitionend', function (e) {
    if (!isOpenMenu) {
        menu.css({ display: '' });

    }
});

menuOpenButton.on('click', function (e) {
    e.preventDefault();

    if (!isOpenMenu) {
        menu.css({ display: 'flex' });
        setTimeout(function () {

            $(this).closest(navClass).toggleClass(addClassOpen, !isOpenMenu);

            isOpenMenu = true;
        }.bind(this), 0);

        return;
    }

    $(this).closest(navClass).toggleClass(addClassOpen, !isOpenMenu);
    isOpenMenu = false;

});

