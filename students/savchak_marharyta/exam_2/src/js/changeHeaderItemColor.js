import $, { data } from 'jquery';

export default function changeColorItemBg() {
    const header = $('.header');
    let isHeaderBg = false;

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const callback = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.boundingClientRect.top < 0 && !entry.isIntersecting && !isHeaderBg) {
                header.addClass('change-bg');
                isHeaderBg = true;
                return;
            };

            if (entry.boundingClientRect.top < 0 && entry.isIntersecting && isHeaderBg) {
                header.removeClass('change-bg');
                isHeaderBg = false;
                return;
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector(".hero");
    observer.observe(target);
};
