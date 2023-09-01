/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
//МІНІМУМ
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
var askUserAge = +prompt('How old you are?');
if (askUserAge >= 0 && askUserAge <= 11) {
  console.log('child');
} else if (askUserAge >= 12 && askUserAge <= 17) {
  console.log('teenager');
} else if (askUserAge >= 18 && askUserAge <= 59) {
  console.log('adult');
} else if (askUserAge >= 60) {
  console.log('elderly people');
} else {
  console.log('undefiend');
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
var askUserNumber = +prompt('Please enter a number');
var numberSymbol;
switch (askUserNumber) {
  case 1:
    numberSymbol = '!';
    break;
  case 2:
    numberSymbol = '@';
    break;
  case 3:
    numberSymbol = '#';
    break;
  case 4:
    numberSymbol = '$';
    break;
  case 5:
    numberSymbol = '%';
    break;
  case 6:
    numberSymbol = '^';
    break;
  case 7:
    numberSymbol = '&';
    break;
  case 8:
    numberSymbol = '*';
    break;
  case 9:
    numberSymbol = '(';
    break;
  default:
    numberSymbol = 'undefiend';
}
console.log(numberSymbol);

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

var firstValue = +prompt('First value');
var secondValue = +prompt('Second value');
var sumValue = 0;
var sentenceValue = 'Sum of the numbers:';
while (firstValue <= secondValue) {
  sumValue = sumValue + firstValue;
  firstValue++;
}
console.log(sentenceValue + ' ' + sumValue);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var firstNum = +prompt('First of number?');
var secondNum = +prompt('Second of number?');
for (var _i = firstNum > secondNum ? firstNum : secondNum; _i > 0; _i--) {
  if (firstNum % _i === 0 && secondNum % _i === 0) {
    console.log(_i);
    break;
  }
}

// Запитай у користувача число і виведи всі дільники цього числа.
var someNum = +prompt('Enter some number');
for (var _i2 = 1; someNum >= _i2; _i2++) {
  if (someNum % _i2 === 0) {
    console.log(_i2);
  }
}

//НОРМА
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

var askNumberPalindrome = +prompt('Enter some five-digit number to digest whether it is a palindrome');
var user1Number = ~~(askNumberPalindrome / 10000);
var user2Number = ~~(askNumberPalindrome / 1000) % 10;
var user3Number = ~~(askNumberPalindrome / 100) % 10;
var user4Number = ~~(askNumberPalindrome / 10) % 10;
var user5Number = askNumberPalindrome % 10;
var isPalindrome = 'this number is palindrome';
var isNotPalindrome = 'this number isn`t palindrome';
if (askNumberPalindrome === user5Number * 10000 + user4Number * 1000 + user3Number * 100 + user2Number * 10 + user1Number) {
  console.log(isPalindrome);
} else {
  console.log(isNotPalindrome);
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

var sumBuying = +prompt('Your purchase amount?');
var discount3persent = 'your 3% discount';
var discount5persent = 'your 5% discount';
var discount7persent = 'your 7% discount';
if (sumBuying >= 200 && sumBuying <= 299) {
  console.log(discount3persent);
} else if (sumBuying >= 300 && sumBuying <= 499) {
  console.log(discount5persent);
} else if (sumBuying >= 500) {
  console.log(discount7persent);
} else {
  console.log('undefiend');
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

var positiveNumbers = 0;
var negariveNumbers = 0;
var zeroNumber = 0;
var evenNumber = 0;
var oddNumber = 0;
var answerPositiveNumbers = 'The number of positive integers is:';
var answerNegativeNumbers = 'The number of negative integers is:';
var answerZeroNumbers = 'The number of numbers that are equal to zero:';
var answerEvenNumbers = 'The number of even integers is:';
var answerOddNumbers = 'The number of odd integers is:';
for (var _i3 = 0; _i3 < 10; _i3++) {
  var enterNumber = +prompt('Please enter number');
  if (typeof enterNumber === 'number') {
    if (enterNumber > 0) {
      positiveNumbers++;
    } else if (enterNumber < 0) {
      negariveNumbers++;
    } else {
      zeroNumber++;
    }
    if (enterNumber % 2 === 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }
  }
}
console.log(answerPositiveNumbers + ' ' + positiveNumbers);
console.log(answerNegativeNumbers + ' ' + negariveNumbers);
console.log(answerZeroNumbers + ' ' + zeroNumber);
console.log(answerEvenNumbers + ' ' + evenNumber);
console.log(answerOddNumbers + ' ' + oddNumber);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

var dayOfWeek = ['Monday!', 'Tuesday!', 'Wensday!', 'Thursday!', 'Friday!', 'Saturday!', 'Sunday!'];
var isConfirmed;
var i = 0;
do {
  isConfirmed = confirm(dayOfWeek[i] + ' ' + 'Do you want to see the next day of the week?');
  i++;
  if (i === dayOfWeek.length) {
    i = 0;
  }
} while (isConfirmed);

//Користувач вводить число і відображається "ялинка" зі знаків #
//Лівий край

var askNumber1Hash = +prompt('Please enter a number (#)');
var emptyString = '';
var markHash = '#';
for (var _i4 = 0; askNumber1Hash > _i4; _i4++) {
  emptyString = emptyString + markHash;
  console.log(emptyString);
}

// Прaвий край
var askNumber2Hash = +prompt('Please enter a number (#)');
var markString = '';
emptyString = '';
for (var _i5 = 1; askNumber2Hash >= _i5; _i5++) {
  for (var y = askNumber2Hash - _i5; y > 0; y--) {
    emptyString += ' ';
  }
  markString += markHash;
  console.log(emptyString + markString);
  emptyString = '';
}
/******/ })()
;
//# sourceMappingURL=script.js.map