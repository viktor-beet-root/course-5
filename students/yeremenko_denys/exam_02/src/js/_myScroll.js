function myScroll() {

    const sections = document.querySelectorAll("section");

    function activeMenu() {

        const scrollTop = scrollY;
        const header = document.querySelector('.header');
        if (scrollTop >= 650) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        };

        const arrowTop = document.querySelector('.footer__go-top');
        if (scrollTop >= 22) {
            arrowTop.classList.add('hide-arrow');
        } else {
            arrowTop.classList.remove('hide-arrow');
        };

    };
    activeMenu();
    window.addEventListener("scroll", activeMenu);
};


export default myScroll;
