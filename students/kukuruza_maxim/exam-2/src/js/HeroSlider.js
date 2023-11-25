let slider = document.querySelector('.hero .hero-slider');
let items = document.querySelectorAll('.hero .hero-slider .hero-slider__item');
let dots = document.querySelectorAll('.hero .dots li');

let lengthItems = items.length - 1;
let active = 0;

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');



}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};
