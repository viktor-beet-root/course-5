const scrollTopBtn = document.querySelector('.scroll-to-top');

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
};

const callbackBtn = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            scrollTopBtn.style.display = 'none'

        } else {
            scrollTopBtn.style.display = 'block';
        }
    })
};

const target = document.querySelector('.hero');

const observer = new IntersectionObserver(callbackBtn, options);

observer.observe(target);

export default callbackBtn;
