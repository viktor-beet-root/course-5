const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// numbers.forEach((number, index, arr) => {
//     console.log(number, index, arr);
//     if (number === 3) {

//     }
// });
const users = [
    {
        user: "Kolya",
        age: 16,
        id: 0
    },
    {
        user: "Vasya",
        age: 20,
        id: 1
    },
    {
        user: "Kolya",
        age: 25,
        id: 3
    },
    {
        user: "Viktor",
        age: 15,
        id: 2
    },
    {
        user: "Vasya",
        age: 30,
        id: 4
    },
];

// const a = users.find((user) => {
//     return user.user.toLowerCase() === "vasya";
// });

// console.log(a);

// const b = users.filter((user) => {
//     return user.user.toLowerCase() === "vasya";
// }).map(user => ({ ...user })); //Object.assign({}, user)
// b[0].age = 0;
// console.log(b, users);

// function dataById(arr, id) {
//     if (!arr && !id) return;
//     return arr.find((item) => item.id === id);
// }
// console.log(dataById(users, 2));

// function getUserByAge(arr, age) {
//     if (!arr && !id) return [];
//     return arr.filter((user) => user.age >= age);
// }

// console.log(getUserByAge(users, 18));

// const cart = [
//     {
//         id: 0,
//         name: 'Product 1',
//         qty: 2,
//         price: 150,
//     },
//     {
//         id: 1,
//         name: 'Product 2',
//         qty: 1,
//         price: 50,
//     },
//     {
//         id: 2,
//         name: 'Product 3',
//         qty: 5,
//         price: 10,
//     }
// ];

// console.log(numbers);
// console.log(numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 0))

// const total = cart.reduce((acc, curVal) => {
//     return acc + (curVal.price * curVal.qty);
// }, 0);

// console.log(total);

function cart() {
    const cart = [];
    return {
        addCart(product) {
            if (!product) return;
            const indexProductSku = this.findIndexBySku(product.sku);

            if (indexProductSku !== -1) {
                this.setQty(product.sku, product.qty, indexProductSku);
            } else {
                product.id = Date.now() * ~~(Math.random() * 10);
                cart.push(product);
            }

        },
        findIndexBySku(sku) {
            return cart.map((product) => product.sku).indexOf(sku);
        },
        getCart() {
            return cart.map((product) => ({ ...product }));
        },
        setQty(sku, qty, index) {
            const indexProductSku = index ?? this.findIndexBySku(sku);
            if (indexProductSku !== -1) {
                cart[indexProductSku].qty = cart[indexProductSku].qty + qty;
            }
        },
    };
}

const myCart = cart();

myCart.addCart({
    sku: 124,
    name: 'Product 1',
    qty: 5,
    price: 20,
});

myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 3,
    price: 15,
})

myCart.addCart({
    sku: 126,
    name: 'Product 3',
    qty: 1,
    price: 10,
})

myCart.addCart({
    sku: 125,
    name: 'Product 2',
    qty: 10,
    price: 15,
})

myCart.setQty(124, -2);

// myCart.getCart()[0].price = 0;

console.log(myCart.getCart());
