/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
//МІНІМУМ
// Напиши всі можливі варіанти створення функцій.
//FUNCTION DECLARATION
function showMessage() {
  console.log('Hello');
}
showMessage();
function showText(text) {
  console.log(text);
}
showText('Привіт');
function number(one, two) {
  console.log(one + two);
}
number(1, 2);
function foo() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  console.log(num * num);
}
foo(1);
foo(5);
foo(10);
function text(firstName, lastName) {
  var mark = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '!';
  console.log('Hello' + ' ' + firstName + ' ' + lastName + ' ' + mark);
}
text('Aliona', 'Dunaieva');
function calcSum(x, y) {
  return x + y;
}
var calc1Sum = calcSum(5, 2);
var calc2Sum = calcSum(10, 15);
console.log(calc1Sum, calc2Sum);

//FUNCTION EXPRESION
var calcMult = function calcMult(a, b) {
  return a * b;
};
console.log(calcMult);
var calc3Mult = function calc3Mult(a, b) {
  return a * b;
};
var singleParameter = function singleParameter(a) {
  return a * a;
}; //один параметр
var noParameters = function noParameters() {
  return console.log('no parameters');
}; //немає параметрів

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function calcArguments() {
  console.log(arguments.length);
}
calcArguments(1, 2, 7, 9, 5, 8, 5);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function showNum(firstNum, secondNum) {
  if (firstNum < secondNum) {
    return -1;
  } else if (firstNum > secondNum) {
    return 1;
  } else {
    return 0;
  }
}
var resultSymbol = showNum(1, 2);
console.log(resultSymbol);

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factNumber(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factNumber(5));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function getNumbers(a, b, c) {
  return a * 100 + b * 10 + c;
}
var resultGetNumbers = getNumbers(1, 4, 9);
console.log(resultGetNumbers);

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calcSquare(height, width) {
  if (arguments.length === 1) {
    return height * height;
  }
  return height * width;
}
console.log(calcSquare(10));

//НОРМА
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function perfectNumber(num) {
  var sumDividers = 0;
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      sumDividers = sumDividers + i;
    }
  }
  return sumDividers === num;
}
console.log(perfectNumber(28));
/******/ })()
;
//# sourceMappingURL=script.js.map