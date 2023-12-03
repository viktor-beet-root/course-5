import $, { data } from 'jquery';
import body from './script.js';

export default function scrollDown() {
    $('.icons-down').on('click', function (e) {
        e.preventDefault();
        const footer = $('.footer');

        body.stop().animate({ scrollTop: $(footer).offset().top }, 1000);
    });
}
