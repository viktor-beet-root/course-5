// console.dir(document);
// console.dir(document.documentElement);
// console.dir(document.head);
// console.dir(document.body);

//document.body.style.backgroundColor = 'red';

const nav = document.getElementById('menu');

// console.log(nav);

// const menu = '';
// console.log(menu);

const menu = nav.querySelector('.menu');
const menuItems = [...nav.querySelectorAll('.menu > li')];
// console.log(menuItems);

// menuItems.forEach((menuItem, index) => {
//     if (!(index % 2)) menuItem.style.backgroundColor = '#777';
//     console.log()
// });


// console.log(Array.prototype.slice.call(menuItems));
// console.log(menuItems);

console.log(nav.parentElement);
console.log(nav.closest('.page'));

console.log(nav.firstChild);
console.log(nav.firstElementChild);

console.log(nav.lastChild);
console.log(nav.lastElementChild);

console.log(menu.previousElementSibling);
console.log(menu.nextElementSibling);

function foo(element) {
    console.log(element);

    const nextElement = element.nextElementSibling;

    if (nextElement && confirm('next?')) {
        foo(nextElement);
    } else {
        console.log('the end');
    }
}

//foo(menuItems[0]);

//menu.innerHTML = '';
//menu.outerHTML = '<h1>sdfsdfsd</h1>';

console.log(menu.innerHTML);
console.log(menu.outerHTML);

// console.log(menuItems[0].innerText);
// console.log(menuItems[0].outerText);

console.log(menuItems[0].querySelector('a > span').textContent = 'sdafdsf');

nav.setAttribute('title', 'test');

console.log(nav.getAttribute('title'));

nav.removeAttribute('title');

console.log(nav.hasAttribute('title'));

nav.dataset.navTest = 6;
console.log(nav.dataset.navTest);

console.dir(menu.classList.add('dddd', 'sdfsdf', 'sdfsdfs'));
console.dir(menu.classList.remove('dddd'));
console.dir(menu.classList.contains('menu'));
console.dir(menu.classList.toggle('menu', false));
//console.dir(menu.classList.toggle('menu'));

//console.log(document.body.style.backgroundColor = '#999');
//console.log(document.body.style['background-color'] = '#999');

// console.log(window.getComputedStyle(document.body).display)
// nav.style.display = 'none';
// nav.style.display = '';

const link = document.createElement('a');

link.setAttribute('href', '#');

link.classList.add('link');

link.textContent = 'link';

console.log(link);

nav.append(link);

nav.prepend(link);

nav.before(link);

nav.after(link);

//nav.replaceWith(link);

link.remove();

// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)

//document.body.innerHTML = `<li>${'sdfdf'}</li>`;
