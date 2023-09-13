/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// function bar(message, type) {
//     // if (isShow) console.log(message);
//     switch (type) {
//         case 'log':
//             console.log(message);
//             break;
//         case 'error':
//             console.log(message);
//             break;
//         case 'info':
//             console.log(message, 'info');
//             break;
//     }
// }

// bar('Hello', 'log');
// bar('Oksana', 'error');
// bar('dvv', 'info');
// if (confirm()) {
//     bar();
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(3, 5);

// foo(100);

// function foo(num = 1) {

//     // const trueNum = num || 1;
//     // const trueNum = num ?? 1;

//     console.log(num * num);
// }

// foo();
// foo(5);
// foo(10);

// {
//     function ddd() {
//         alert(222);
//     }
//     // ddd()
// }
// ddd()

// function nameUser(firstName, lastName, znak = '!') {
//     console.log('Hello' + ' ' + firstName + ' ' + lastName + znak);
// }

// nameUser('Oksana', 'Umenchuk', '.')
// nameUser('Sasha', 'Neborak')

// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') return;

//     return a + b;
// }

// const ss = sum('s', 2);
// const sss = sum(5, 2);
// console.log(ss, sss);

// const aaa = sum(sum(1, 2), sum(2, 2));
// console.log(aaa);

// function sum(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// function add(x, y) {
//     return x * y;
// }

// function div(x, y) {
//     return x / y;
// }

//
/**
 * Function calc
 * @param {number} x
 * @param {number} y
 * @param {string} symbol
 * @returns {number}
 */

// function calc(x, y, symbol = '+') {

//     switch (symbol) {
//         case '+':
//             return sum(x, y);
//         case '-':
//             return sub(x, y);
//         case '*':
//             return add(x, y);
//         case '/':
//             return div(x, y);
//     }
// }

// calc()

// const m = calc(15, 5, '-');
// console.log(m);

// function ddss(a, b, ...other) {
//     console.log(arguments);
//     console.log(other);
//     //sum2(2, 2);
//     return;
// }

// console.log(ddss(1, 1, 1, 1, 1, 1, 1));

//////////

// const sum2 = function (a, b) {
//     return a + b;
// }
// console.log(sum2(2, 4));
// console.log(sum2(5, 5));

// const sum3 = (a, b) => {
//     return a + b;
// }

// const sum4 = (a, b) => a + b;

// const pow = a => a * a;

// const aaa = () => console.log(111);

// ======================================================

// function message(text) {
//     console.log(text);
//     // return text + '!';
// }

// function test(text) {
//     alert(text);
//     // return text + '!';
// }
// message(11);

function foo(f) {
  console.log(f);
  // (typeof f === 'function') && f('scscdvvvvv');
  if (typeof f === 'function') f('scscdvvvvv');
}

// setTimeout(function () {
//     foo(message);
//     // foo(test);
//     foo(1);
// }, 1000);

console.log(11111111111);
function first() {
  return 'Hello';
}
function second() {
  return 'World';
}
function finStr(a, b) {
  console.log(a, b);
  if (typeof a === 'function' && typeof b === 'function') return a() + ' ' + b();
}
console.log(finStr(first, second));

// foo(() => "Hello", () => "World");

// function baz() {

//     return function (text) {
//         console.log(text);
//     }
// }

// function baz() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// const qqq = baz();

// console.log(qqq());
// console.log(qqq());
// console.log(qqq());
// console.log(qqq());
// console.log(qqq());
// console.log(qqq());

function baz(userName) {
  return function (text) {
    return text + ' ' + userName;
  };
}
var ret = baz('Oksana');
console.log(ret('Hello'));
console.log(ret('Buy'));
console.log(ret('Hello'));
var seton = baz('Ivan');
console.log(seton('Hello'));
console.log(seton('Good'));
/******/ })()
;
//# sourceMappingURL=script.js.map