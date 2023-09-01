/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// Мінімум

// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

var fractions = (0.1 * 10 + 0.2 * 10) / 10;
console.log(fractions);

// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

var one = '1';
var two = 2;
var sum = +one + two;
console.log(sum);

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var amountOfFlashMemory = parseInt(prompt('Enter amount of memory on your memorystick in GB', ''));
var GbyteToMbyte = 1024 * amountOfFlashMemory;
var files820Mbyte = Math.floor(GbyteToMbyte / 820);
console.log('You can place ' + files820Mbyte + ' files as large as 820 megabytes on your memorystick');

// Норма

// 1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач
// і скільки здачі у нього залишиться.

var amountOfMoney = parseInt(prompt('Enter amount of your money', ''));
var costOfChocolate = parseInt(prompt('Enter the cost of one chocolate', ''));
var chocolatesAbleToBuy = Math.floor(amountOfMoney / costOfChocolate);
var change = amountOfMoney - chocolatesAbleToBuy * costOfChocolate;
console.log('You can buy ' + chocolatesAbleToBuy + ' chocolates and you will have change in a size of ' + change);

// 2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

var neededNumber = +prompt('Enter a three-digit number', '');
var backwards = neededNumber % 10 * 100 + (neededNumber - neededNumber % 10) % 100 + (neededNumber - neededNumber % 100) / 100;
console.log(backwards);

// Максимум

// 1.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних.
//Вивести суму нарахованих відсотків.

// 2.Що повернуть вирази:
//  2 && 0 && 3

//  2 || 0 || 3

// 2 && 0 || 3
/******/ })()
;
//# sourceMappingURL=script.js.map