//document.cookie = 'user=Viktor';
document.cookie = 'user1=Petya';
document.cookie = 'user5=Petya';
document.cookie = 'user=Viktor3';
const date = new Date(Date.now() + 10000);
console.log(date.toUTCString())

//document.cookie = 'user=Viktor3; path=/; domain=localhost; expires=' + date.toUTCString();
//document.cookie = 'user=Viktor3; path=/; domain=localhost; max-age=10';


function getCookie(nameCookie) {
    if (!nameCookie) return '';

    const cookieList = document.cookie.split('; ').map((cookieString) => cookieString.split('='));
    const cookie = Object.fromEntries(cookieList)[nameCookie];

    return cookie ? cookie : '';
}

removeCookie('user1');

console.log(getCookie('user1'));

function removeCookie(nameCookie) {
    if (!nameCookie) return;

    document.cookie = nameCookie + '=t; max-age=-1';
}


function setCookie(nameCookie, value, options) {
    if (!nameCookie || !value) return;

    let cookie = `${nameCookie}=${value}`;

    if (options) {
        for (const key in options) {
            let value = options[key];

            if (key === 'expires' && value instanceof Date) {
                value = value.toUTCString();
            }

            cookie = `${cookie}; ${key}=${value}`;
        }
    }

    document.cookie = cookie;
}


setCookie('user10', 'Beetroot', {
    path: '/',
    domain: 'localhost',
    expires: new Date(Date.now() + 100000)
});

setCookie('user10', 'Beetroot', {
    path: '/',
    domain: 'localhost',
    'max-age': 100
});

setCookie('user11', 'Beetrooteee');

console.log(document.cookie)


const counterCookieName = 'counter';
const counter = document.querySelector('.title span');

const counterValue = getCookie(counterCookieName);
let newValue = 0;

newValue = counterValue ? +counterValue : newValue;

newValue && (counter.textContent = newValue);

setCookie(counterCookieName, !newValue ? 1 : newValue + 1);

// if (!counterValue) {
//     setCookie(counterCookieName, 1);
// } else {
//     counter.textContent = counterValue;
//     setCookie(counterCookieName, +counterValue + 1);
// }
// console.log(counterValue)
// console.log(counter)


// console.log(JSON.parse(localStorage.getItem('cartList')));
localStorage.setItem('fff', JSON.stringify([{}]));

function addUser(formId, userListSelector) {
    const form = document.getElementById(formId);
    const userListElement = document.querySelector(userListSelector);
    let userList = [];
    const key = 'userList';
    let userId = 0;
    const actinSelector = '.user-action';

    const localStorageUserList = getFromLocalStorage(key);

    if (localStorageUserList) {
        localStorageUserList.forEach((user) => {
            renderUser(userListElement, user);
            userList.push(user);
        });

        userId = +userList.at(-1).id;
    }

    userListElement.addEventListener('click', function (e) {
        e.preventDefault();

        const tragetElement = e.target.closest(actinSelector);

        if (tragetElement && tragetElement.classList.contains('edit')) {
            editUser(+tragetElement.dataset.userId, userList, form);
        }

        if (tragetElement && tragetElement.classList.contains('remove')) {
            removeUser(+tragetElement.dataset.userId, userList);
            tragetElement.closest('li').remove();
            saveTolocalStorage(key, userList);
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const user = Object.fromEntries(
            Array.from(
                new FormData(this)
            )
        );

        // user edit
        if (this.classList.contains('user-edit')) {
            user.id = +form.dataset.userId;
            form.removeAttribute('data-user-id');
            form.classList.remove('user-edit');

            const oldUserList = userList;

            userList = userList.map((userOnList) => {
                if (userOnList.id === user.id) {
                    return user;
                }

                return userOnList;
            });

            rerenderUserList(userList, oldUserList, userListElement);
            saveTolocalStorage(key, userList);
            form.reset();

            return;
        }

        // add new user
        user.id = ++userId;

        renderUser(userListElement, user);
        userList.push(user);
        saveTolocalStorage(key, userList);
        form.reset();
    });
}

function rerenderUserList(userList, oldUserList, userListElement) {
    const userListLength = userList.length - 1;

    for (let i = userListLength; i >= 0; i--) {

        if (userList[i] !== oldUserList[i]) {
            userListElement
                .children[userListLength - i]
                .replaceWith(
                    creatDomElementFromString(
                        getUserTamplate(userList[i])
                    )
                );
        }
    }
}

function removeUser(userId, userList) {
    const userIndex = userList.map((user) => user.id).indexOf(userId);

    userList.splice(userIndex, 1);
}

function creatDomElementFromString(stringHTML) {
    const wrapper = document.createElement('div');

    wrapper.insertAdjacentHTML('beforeend', stringHTML);

    return wrapper.firstElementChild;
}

function editUser(userId, userList, form) {
    const user = getUserById(userId, userList);

    for (const key in user) {
        if (key === 'id') continue;

        form[key].value = user[key];
    }

    form.classList.add('user-edit');
    form.dataset.userId = userId;
}

function getUserById(id, userList) {
    return userList.find((user) => user.id === id);
}

function saveTolocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function renderUser(userListElement, user) {
    const li = getUserTamplate(user);

    userListElement.insertAdjacentHTML('afterbegin', li);

}

function getUserTamplate(user) {
    return `
        <li>
            User Name: ${user['user-name']}; 
            Email: ${user.email};
            Age: ${user.age}.
            <button class="user-action remove" data-user-id="${user.id}">Remove User</button>
            <button class="user-action edit" data-user-id="${user.id}">Edit User</button>
        </li>
    `;
}


addUser('add_user', '.user-list');
