import myAjax from "./myAjax.js";
import myAjaxPromis from "./myAjaxPromis.js";
import myFetch from "./myFetch.js";


// setTimeout(() => {
//     console.log(1);
// });

// console.log(2);
// console.log(3);

// for (var i = 0; i < 10; i++) {
//     s(i);
// }

// function s(i) {
//     setTimeout(() => {
//         console.log(i);
//     });
// }
const url = 'https://jsonplaceholder.typicode.com/users';

function renderUser(users) {
    const ul = document.getElementById('user_list');
    const fragment = document.createDocumentFragment();

    users.forEach((user) => {
        console.log(user)
        // const li = `
        // <li> id. ${user.id}.
        // ${user.username}</li>
        // `;
        const li = document.createElement('li');
        const text = 'Id. ' + user.id + '. User name: ' + user.username + '.';

        li.append(text);

        fragment.append(li);
        //ul.insertAdjacentHTML('beforeend', li);
    });

    ul.append(fragment);
}


// function getData(users) {
//     myAjax({
//         url: 'https://jsonplaceholder.typicode.com/posts'
//     }, (posts) => {
//         renderUser(posts, users);
//     });
// }

// myAjax({
//     url
// }, getData);

// const a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('sdfsdfsdf');
//         //reject('error')
//     }, 2000);
// });

// a.then((data) => {
//     console.log(data)
// });

// a.catch((data) => {
//     console.log(data)
// });

// a.finally(() => {
//     console.log(222)
// });


// myAjax(
//     {
//         method: "POST",
//         url
//     },
//     (data) => {
//         console.log(data);
//     },
//     {
//         name: 'Viktor',
//         age: 15,
//     }
// );


// myAjaxPromis(
//     {
//         url
//     }
// )
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((xhr) => {
//         console.log(xhr);
//     })
//     .finally(() => {
//         console.log(111);
//     });


// const usersPromise = myAjaxPromis({ url });
// const postsPromise = myAjaxPromis({
//     url: 'https://jsonplaceholder.typicode.com/posts'
// });

// Promise.all([usersPromise, postsPromise])
//     .then((data) => {
//         console.log(data)
//     });


//Promise.allSettled


myFetch(url).then((users) => {
    renderUser(users);
});

myFetch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: 'Viktor',
        age: 22,
    }),
    headers: {
        'Content-type': 'application/json',
    }
}).then((data) => {
    console.log(data);
});
