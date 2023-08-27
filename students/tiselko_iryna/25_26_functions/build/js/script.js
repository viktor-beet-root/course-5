/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


// Мінімум
//1.Напиши всі можливі варіанти створення функцій.
/* - Function declaration;
    function name(parameter1, parameter2, ... parameterN) {
       ...body..
    }

 - Function Expression;
    let func = function(arg1, arg2, ..., argN) {
        return expression;
    };

 - Arrow Function;
    let func = (arg1, arg2, ..., argN) => expression;
*/

// 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function sumArg() {
//     console.log(arguments.length);
// }

// sumArg(5, 6, 5);

/* 3.Напиши функцію, яка приймає 2 числа і повертає :
    //1. -1, якщо перше число менше, ніж друге;
    //2. 1 - якщо перше число більше, ніж друге;
    //3. 0 - якщо числа рівні.*/

// function eql(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// const compareNumb = eql(2, 8);
// console.log(compareNumb);

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// function factor(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return factor(n - 1) * n;
// }

// const factorial = factor(5);
// console.log(factorial);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function unif(a, b, c) {
//     return a * 100 + b * 10 + c;
// }

// const unifSum = unif(10, 8, 9);
// console.log(unifSum);

// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// function square(x, y) {
//     if (x, y) {
//         return x * y;
//     } else {
//         return x * x;
//     }
// }
// const squareMath = square(2);
// console.log(squareMath);

//Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function sumDiv(n) {
  var sum = 1;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n ? true : false;
}
var PrfctNum = sumDiv(28);
console.log(PrfctNum);

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
/******/ })()
;
//# sourceMappingURL=script.js.map