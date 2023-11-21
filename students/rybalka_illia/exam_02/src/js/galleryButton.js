const button = document.querySelector('#button');
const hiddenImages = document.querySelectorAll('.hidden-item');
let isHidden = true;

button.addEventListener('click', () => {
    button.textContent = isHidden ? 'See Less' : 'See More';

    isHidden = !isHidden;
    hiddenImages.forEach(item => item.classList.toggle('hidden'));
});

export default button;
