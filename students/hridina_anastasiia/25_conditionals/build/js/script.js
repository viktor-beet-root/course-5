/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), 
// дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.

var userAge = +prompt('How old are you?', '');
if (userAge === 0 || userAge <= 11) {
  console.log('You are a child');
} else if (userAge >= 12 && userAge <= 17) {
  console.log('You are a teenager');
} else if (userAge >= 18 && userAge <= 59) {
  console.log('You are an adult');
} else if (userAge >= 60 && userAge <= 120) {
  console.log('You are a senior citizen');
} else if (userAge < 0 || userAge > 120) {
  console.log('default');
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).

var anyNumber = +prompt('Enter a number from 0 to 9', '');
switch (anyNumber) {
  case 0:
    console.log(')');
    break;
  case 1:
    console.log('!');
    break;
  case 2:
    console.log('@');
    break;
  case 3:
    console.log('#');
    break;
  case 4:
    console.log('$');
    break;
  case 5:
    console.log('%');
    break;
  case 6:
    console.log('^');
    break;
  case 7:
    console.log('&');
    break;
  case 8:
    console.log('*');
    break;
  case 9:
    console.log('(');
    break;
  default:
    console.log('default');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

var numRange1 = +prompt('Enter an initial value', '');
var numRange2 = +prompt('Enter a final value', '');
var a = numRange2 - numRange1 + 1;
var b = numRange1 + numRange2;
var rangeSum = a * b / 2;
console.log(rangeSum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var m = +prompt('Enter any number', '');
var n = +prompt('Enter any number again', '');
var j = m;
var r = n;
while (j !== 0 && r !== 0) {
  if (j > r) {
    j = j % r;
  } else {
    r = r % j;
  }
}
var divider = j + r;
console.log(divider);

// Запитай у користувача число і виведи всі дільники цього числа.

var aNumber = +prompt('Please enter a number', '');
for (var i = 1; i <= aNumber; i++) {
  if (aNumber % i == 0) {
    console.log(i);
  }
}

// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

var fiveDigitNum = +prompt('Please enter a 5-digit number', '');
var y = fiveDigitNum;
var reversed = 0;
k = y;
w = y;
while (y > 0) {
  k = y % 10;
  reversed = reversed * 10 + k;
  y = parseInt(y / 10);
}
console.log(reversed);
if (w == reversed) {
  console.log("It is a palindrome", reversed);
} else {
  console.log('It is not a palindrome', reversed);
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %; 
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.

var sumTotal = +prompt('What is the total cost of your purchase?', '');
var threePercent = sumTotal / 100 * 3;
var fivePercent = sumTotal / 100 * 5;
var sevenPercent = sumTotal / 100 * 7;
if (sumTotal >= 200 && sumTotal < 300) {
  console.log(sumTotal - threePercent);
} else if (sumTotal >= 300 && sumTotal < 500) {
  console.log(sumTotal - fivePercent);
} else if (sumTotal >= 500) {
  console.log(sumTotal - sevenPercent);
}

//===================================

var space = '';
4, _readOnlyError("n");
for (var _i = 0; n > _i; _i++) {
  space += _i + 1 + ' ';
  for (var _j = 0; _j <= _i; _j++) {
    space += '#';
  }
  space += '\n';
}
console.log(space);

//====================================

var emptySpace = '';
h = 4;
for (var _i2 = 1; _i2 <= h; _i2++) {
  emptySpace += _i2 + ' ';
  for (var _y = _i2; _y < h; _y++) {
    emptySpace += ' ';
  }
  for (var _y2 = 0; _y2 < _i2; _y2++) {
    emptySpace += '#';
  }
  emptySpace += '\n';
}
console.log(emptySpace);

//====================================

var gap = '';
line = 4;
for (var _i3 = 1; _i3 <= line; _i3++) {
  gap += _i3 + ' ';
  for (var g = _i3; g < line; g++) {
    gap += ' ';
  }
  for (var _g = 0; _g < _i3; _g++) {
    gap += '#';
  }
  for (var _w = 3; _w < line; _w++) {
    gap += ' ';
  }
  for (var _w2 = 0; _w2 < _i3; _w2++) {
    gap += '#';
  }
  gap += '\n';
}
console.log(gap);
/******/ })()
;
//# sourceMappingURL=script.js.map