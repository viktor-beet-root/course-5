function foo(event) {
    console.log(event.target, event.currentTarget);
    // if (event.target === event.currentTarget) {
    //     //alert(111);
    // }
}

const nav = document.getElementById('menu');

// nav.onclick = foo;
// nav.onclick = () => {
//     console.log(111)
// };

//nav.addEventListener('click', foo, true);
nav.addEventListener('click', foo);

//document.body.addEventListener('click', foo);

nav.removeEventListener('click', foo);

const menuSpan = document.querySelector('.menu__link span');

menuSpan.addEventListener('click', foo);

//console.log(menuSpan);

const menuFirstLink = document.querySelector('.menu__link');

menuFirstLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (confirm('?')) {
        location.href = this.getAttribute('href');
    }
});

const button = document.querySelector('.my-first-button');



button.addEventListener('click', function (e) {
    // e.stopPropagation();
    // e.stopImmediatePropagation();

    const className = this.classList.value;
    const text = this.textContent;

    this.classList.replace(className, text);
    this.textContent = className;
});

// button.addEventListener('click', function () {
//     console.log(111)
// });

function modal(options = {}) {
    options = {
        openClassName: 'open',
        selector: '.modal',
        modalContentSelector: '.modal__content',
        modalHeaderSelector: '.modal__header',
        closeModalSelector: '.modal__close',
        triggerElementSelector: '.open-modal',
        isAutoOpen: false,
        content: '',
        header: '',
        ...options
    }

    console.log(options)
    const openModalTriggerElement = document.querySelector(options.triggerElementSelector);
    const modalElement = document.querySelector(options.selector);

    openModalTriggerElement.addEventListener('click', openModal);

    modalElement.addEventListener('click', (e) => {
        if ((e.target === e.currentTarget) || e.target.closest(options.closeModalSelector)) {
            closeModal();
        }
    });

    if (options.content) addContentent(options.content);

    if (options.header) addHeader(options.header);

    if (options.isAutoOpen) openModal();

    function openModal() {
        modalElement.classList.add(options.openClassName);

        if (options.onOpenModal && typeof options.onOpenModal === 'function') {
            options.onOpenModal();
        }
    }

    function closeModal() {
        modalElement.classList.remove(options.openClassName);
    }

    function addContentent(content) {
        modalElement.querySelector(options.modalContentSelector).innerHTML = content;
    }

    function addHeader(header) {
        modalElement.querySelector(options.modalHeaderSelector).innerHTML = header;
    }

    return {
        openModal,
        closeModal,
        addContentent,
        addHeader,
    }
}


const myModal = modal({
    //selector: '.modal',
    //triggerElementSelector: '.open-modal',
    //isAutoOpen: false,
    content: '<p class="modal__text"><strong>dsgdfsg</strong></p>',
    header: '<h4 class="modal__title">xdsfasdfasdf</h4>',
    onOpenModal: function () {
        console.log('opened');
    },
});


const input = document.querySelector('.add-content-modal');

input.addEventListener('change', function () {
    myModal.addContentent(this.value);
});



setTimeout(function () {
    myModal.openModal();

    setTimeout(function () {
        myModal.closeModal();
    }, 1000);
}, 5000);


console.log(11111);
