/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function bar(message, type) {
  switch (type) {
    case 'log':
      console.log(message);
      break;
    case 'error':
      console.error(message);
      break;
    case 'info':
      console.info(message, 'info');
  }
}
bar('Hello', 'log');
bar('Viktor', 'error');
bar('Viktordfdfsg', 'info');

// if (confirm()) {
//     bar();
// }

foo(100);
function foo() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  //const truNum = num || 1;
  //const truNum = num ?? 1;

  console.log(num * num);
}
foo();
foo(15);
foo(10);

// {
//     function ddd() {
//         alert(2222);
//     }
//     ddd();
// }

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return;
  return a + b;
  alert(1111);
}
var ss = sum('s', 2);
var sss = sum(5, 2);
var aaaa = sum(sum(1, 2), sum(2, 2));
console.log(ss, sss);
function summ(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function multy(a, b) {
  return a * b;
}

/**
 * Funtion calc
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {string} equal 
 * @returns {number}
 */
function calc(a, b) {
  var equal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '+';
  switch (equal) {
    case '+':
      return summ(a, b);
    case '-':
      return minus(a, b);
    case '/':
      return div(a, b);
    case '*':
      return multy(a, b);
  }
}
var calcul = calc(8, 2, '-');
console.log(calcul);
function ddss(a, b) {
  for (var _len = arguments.length, other = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    other[_key - 2] = arguments[_key];
  }
  console.log(arguments);
  console.log(other);
}
ddss(1, 1, 1, 1, 1, 1, 1);
/******/ })()
;
//# sourceMappingURL=script.js.map