import $, { data } from 'jquery';
import body from "./script.js";

export default function scrollTop() {
    const linkToTop = $('.link-top');

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const callback = function (entries, observer) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                linkToTop.addClass('scroll-to-top');

                $('.scroll-to-top').on('click', function (e) {
                    e.preventDefault();

                    body.stop().animate({ scrollTop: 0 }, 1000);
                });

                return;
            };

            if (entry.isIntersecting) {
                linkToTop.removeClass('scroll-to-top');
            }

        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector(".hero");
    observer.observe(target);

}
