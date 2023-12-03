import $, { data } from "jquery";
import body from "./script.js";

export default function scrollMenuItem() {

    $('.menu__link').on('click', function (e) {
        const targetSec = $(this).attr('href');

        body.animate({
            scrollTop: $(targetSec).offset().top
        }, 1000);
    });
}
