const seeMoreButton = document.querySelector('.gallery-btn');
const galleryOpenItems = document.querySelectorAll('.gallery-open');

let galleryOpenVisible = true;
seeMoreButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (galleryOpenVisible) {
        galleryOpenItems.forEach(item => {
            item.classList.remove('gallery__grid-item--open');
        });
    } else {
        galleryOpenItems.forEach(item => {
            item.classList.add('gallery__grid-item--open');
        });
    }

    galleryOpenVisible = !galleryOpenVisible;
});
