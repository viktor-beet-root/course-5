/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// function bar(message, type) {
//     switch (type) {
//         case 'log':
//             console.log(message);
//             break;
//         case 'error':
//             console.error(message);
//             break;
//         case 'info':
//             console.info(message, 'info');
//     }
// }

// bar('Hello', 'log');
// bar('Viktor', 'error');
// bar('Viktordfdfsg', 'info');

// // if (confirm()) {
// //     bar();
// // }

// foo(100);

// function foo(num = 1) {
//     //const truNum = num || 1;
//     //const truNum = num ?? 1;

//     console.log(num * num);
// }

// foo();
// foo(15);
// foo(10);

// // {
// //     function ddd() {
// //         alert(2222);
// //     }
// //     ddd();
// // }

// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') return;

//     return a + b;
//     alert(1111);
// }

// const ss = sum('s', 2);
// const sss = sum(5, 2);

// const aaaa = sum(sum(1, 2), sum(2, 2));

// console.log(ss, sss);

// function summ(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     return a / b;
// }

// function multy(a, b) {
//     return a * b;
// }

// /**
//  * Funtion calc
//  *
//  * @param {number} a
//  * @param {number} b
//  * @param {string} equal
//  * @returns {number}
//  */
// function calc(a, b, equal = '+') {
//     switch (equal) {
//         case '+':
//             return summ(a, b);
//         case '-':
//             return minus(a, b);
//         case '/':
//             return div(a, b);
//         case '*':
//             return multy(a, b);
//     }
// }
// const calcul = calc(8, 2, '-');
// console.log(calcul);

// function ddss(a, b, ...other) {
//     console.log(arguments);
//     console.log(other);
//     //sum2(2, 2);
//     return;
// }

// console.log(ddss(1, 1, 1, 1, 1, 1, 1))

// const sum2 = function (a, b) {
//     return a + b;
// };

// console.log(sum2(2, 2));
// console.log(sum2(5, 5));

// const sum3 = (a, b) => {
//     return a + b;
// }

// const sum4 = (a, b) => a + b;

// const pow = a => a * a;

// const aaaqqq = () => console.log(111);

//==========================================================

function message(text) {
  console.log(text);
  //return text + '!';
}

function test(text) {
  alert(text);
}

//message(11);

function foo(callback) {
  console.log(callback);
  //(typeof f === 'function') && f('sdfdfssd');
  if (typeof callback === 'function') callback('sdfdfssd');
}

// setTimeout(function () {
//     foo(message);
//     //foo(test);
//     foo(1);
// }, 1000);

// foo(function () {
//     console.log(111111);
// });
//foo(message);
//foo(test);
// foo(() => {
//     console.log('arow')
// });

// message('aaaaaaaa');
// console.log(111111111);

function ddd(q, f) {
  return q() + ' ' + f();
}

//console.log(ddd(() => "Hello", () => "World"));

// function baz() {
//     return function (text) {
//         console.log(text);
//     };
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
// console.log('====================');
// const www = baz();
// console.log(www());
// console.log(www());
// console.log(www());
// console.log(www());
// console.log('====================');
// console.log(qqq());
// console.log(qqq());
// console.log(qqq());
// console.log(qqq());

function rec(n) {
  if (n === 1) return n;
  return n * rec(n - 1);
}
console.log(rec(5));
/******/ })()
;
//# sourceMappingURL=script.js.map