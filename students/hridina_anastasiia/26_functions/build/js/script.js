/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// Мінімум

// Напиши всі можливі варіанти створення функцій.

function name(parameter1, parameter2) {}
; // Function Declaration
var func = function func() {}; // Function Expression
var arrow = function arrow(arg1, arg2, arg3, argN) {
  return expression;
}; // Arrow Function

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function param() {
  console.log(arguments.length);
}
param(12, 6, 45);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function diff(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
console.log(diff(2, 4));
console.log(diff(5, 1));
console.log(diff(7, 7));

// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function digits(h, m, j) {
  if (h, m, j) {
    return h * 100 + m * 10 + j;
  }
}
console.log(digits(4, 5, 6));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function area(x, y) {
  var areaOfRectangle = x * y;
  var areaOfSquare = x * x;
  if (x, y) {
    return areaOfRectangle;
  } else if (x, x) {
    return areaOfSquare;
  }
}
console.log(area(11));
console.log(area(15, 4));

// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function perfectNumber(number) {
  var n = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      n += i;
    }
  }
  if (n === number && n !== 0) {
    console.log('It is a perfect number');
  } else {
    console.log('It is not a perfect number');
  }
}
perfectNumber(28);

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function isPerfect(min, max) {}
console.log(isPerfect(1, 600));
/******/ })()
;
//# sourceMappingURL=script.js.map