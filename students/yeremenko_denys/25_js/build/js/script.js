/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.
var userAge = +prompt("Введите свой возраст");
if (userAge >= 0 && userAge <= 11) {
  console.log("Вы ребенок");
} else if (userAge >= 12 && userAge <= 17) {
  console.log("Вы подросток");
} else if (userAge >= 18 && userAge <= 59) {
  console.log("ВЫ взрослый");
} else if (userAge >= 60) {
  console.log("ВЫ персионер");
} else {
  console.log("Неверно введены данные");
}
;

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
var userNumber = +prompt("Введите число от 0 до 9");
switch (userNumber) {
  case 0:
    console.log(")");
    break;
  case 1:
    console.log("!");
    break;
  case 2:
    console.log("@");
    break;
  case 3:
    console.log("#");
    break;
  case 4:
    console.log("$");
    break;
  case 5:
    console.log("%");
    break;
  case 6:
    console.log("^");
    break;
  case 7:
    console.log("&");
    break;
  case 8:
    console.log("*");
    break;
  case 9:
    console.log("(");
    break;
}
;

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
var firstCount = +prompt('Введите первое число, я посчитаю сумму');
var secondCount = +prompt('Введите второе число, я посчитаю сумму');
var sumCount = 0;
var bigUserNumber = 0;
var smallUserNumber = 0;
if (firstCount >= secondCount) {
  bigUserNumber = firstCount;
  smallUserNumber = secondCount;
} else {
  bigUserNumber = secondCount;
  smallUserNumber = firstCount;
}
;
for (var index = smallUserNumber; index <= bigUserNumber; index++) {
  sumCount = sumCount + index;
}
;
console.log('Сумма всех чисел', sumCount);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
var firstUserCount = +prompt('Введите первое число');
var secondUserCount = +prompt('Введите второе число');
var moreUserCount;
var lessUserCount;
if (firstUserCount >= secondUserCount) {
  moreUserCount = firstUserCount;
  lessUserCount = secondUserCount;
} else {
  moreUserCount = secondUserCount;
  lessUserCount = firstUserCount;
}
;
var greatestCommonDivisorUser = lessUserCount;
var i = lessUserCount;
while (moreUserCount % i || lessUserCount % i) {
  greatestCommonDivisorUser = i - 1;
  i = i - 1;
}
;
console.log('Наибольший общий делитель: ', greatestCommonDivisorUser);

// Запитай у користувача число і виведи всі дільники цього числа.
var userCount = +prompt('Введите число, я покажу его делители');
console.log('Ваше число: ', userCount, '\n', 'Делители вашего числа:');
for (var _index = 1; _index <= userCount; _index++) {
  if (!(userCount % _index)) console.log(_index);
}
;

// Норма
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
var userFiveDigitNumber = +prompt("Введите 5-значное число");
var tenThousand = userFiveDigitNumber % 10; // 1
var thousands = userFiveDigitNumber % 100 - tenThousand; // 20
var hundreds = userFiveDigitNumber % 1000 - tenThousand - thousands; //300
var tens = userFiveDigitNumber % 10000 - tenThousand - thousands - hundreds; //4000
var units = userFiveDigitNumber % 100000 - tenThousand - thousands - hundreds - tens; //50000

var newUserFiveDigitNumber = tenThousand * 10000 + thousands * 100 + hundreds + tens / 100 + units / 10000;
if (userFiveDigitNumber === newUserFiveDigitNumber) {
  console.log('Ваше число является полиандромом');
} else {
  console.log('Ваше число не является полиандромом');
}
;

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

var userPayment = +prompt('Введите сумму вашей покупки');
if (userPayment < 200) {
  console.log('Сумма вашего платежа равна: ', userPayment);
} else if (userPayment >= 200 && userPayment <= 300) {
  var userThreePercentDiscount = userPayment - userPayment / 100 * 3;
  console.log('Сумма вашего платежа равна: ', userThreePercentDiscount);
} else if (userPayment > 300 && userPayment < 500) {
  var userFivePercentDiscount = userPayment - userPayment / 100 * 5;
  console.log('Сумма вашего платежа равна: ', userFivePercentDiscount);
} else if (userPayment >= 500) {
  var userSevenPercentDiscount = userPayment - userPayment / 100 * 7;
  console.log('Сумма вашего платежа равна: ', userSevenPercentDiscount);
}
;

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// Максимум
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу
// діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50.
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N
//  (буде корисним почитати про алгоритм: "бінарний пошук").

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

// Елка =====================================================
var branchTree = '#';
var branchTreeNext = '\n';
var trunkTree = ' ';
var userTreeBranchCount = +prompt('Введите размер елки');

// Елка Easy
var treeEasy = '';
for (var _index2 = 1; _index2 <= userTreeBranchCount; _index2++) {
  for (var j = 1; j <= _index2; j++) {
    treeEasy += branchTree;
  }
  treeEasy += branchTreeNext;
}
console.log('Easy tree');
console.log(treeEasy);

// Елка Normal
var treeNormal = '';
for (var _index3 = 1; _index3 <= userTreeBranchCount; _index3++) {
  for (var _j = 1; _j <= userTreeBranchCount - _index3; _j++) {
    treeNormal += trunkTree;
  }
  for (var k = 1; k <= _index3; k++) {
    treeNormal += branchTree;
  }
  treeNormal += branchTreeNext;
}
console.log('Norm tree');
console.log(treeNormal);

// Елка Hard
var treeHard = '';
for (var _index4 = 1; _index4 <= userTreeBranchCount; _index4++) {
  for (var _j2 = 1; _j2 <= userTreeBranchCount - _index4; _j2++) {
    treeHard += trunkTree;
  }
  for (var _k = 1; _k <= _index4; _k++) {
    treeHard += branchTree;
  }
  treeHard += trunkTree;
  for (var g = 1; g <= _index4; g++) {
    treeHard += branchTree;
  }
  treeHard += branchTreeNext;
}
console.log('Hard tree');
console.log(treeHard);
/******/ })()
;
//# sourceMappingURL=script.js.map