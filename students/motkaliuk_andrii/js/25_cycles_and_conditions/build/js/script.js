/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// const nub = -3;

// if (nub === 3) console.log(1);
// else console.log(2);

// if (nub > 0) {
//     console.log(1);
// } else {
//     console.log(2)
// }

// const d = 5;
// if (number % 2) {
//     console.log('odd');
// } else {
//     console.log('even')
// }

// if (d === 2) {
//     console.log('odd');
// } else if ((d > 30 && !(d % 2)) || d === 3) {
//     console.log('hello');
// } else {
//     console.log('nothing')
// }

// const num = prompt('number?',);
// const a = Number(num);
// if (a < 0) {
//     console.log('negativ');
// } else if (a > 0) {
//     console.log('positiv');
// } else {
//     console.log('null')
// }

// const myAge = 15;
// switch (myAge) {
//     case 10:
//         console.log('10');
//         break;
//     case 15:
//     case 20:
//         console.log('15, 20');
//         break;
//     case 30:
//         console.log('30');
//         break;
//     default:
//         console.log('default');
// }

// const num = prompt('Номер місяця?',);
// const month = Number(num);
// switch (month) {
//     case 1:
//         console.log('січень');
//         break;
//     case 2:
//         console.log('лютий');
//         break;
//     case 3:
//         console.log('березень');
//         break;
//     case 4:
//         console.log('квітень');
//         break;
//     case 5:
//         console.log('травень');
//         break;
//     case 6:
//         console.log('червень');
//         break;
//     case 7:
//         console.log('липень');
//         break;
//     case 8:
//         console.log('серпень');
//         break;
//     case 9:
//         console.log('вересень');
//         break;
//     case 10:
//         console.log('жовтень');
//         break;
//     case 11:
//         console.log('листопад');
//         break;
//     case 12:
//         console.log('грудень');
//         break;
//     default:
//         console.log('неправильний номер місяця');
// }

// const num = prompt('Номер місяця?',);
// const month = Number(num);
// switch (month) {
//     case 1:
//         console.log('січень');
//     case 2:
//         console.log('лютий');
//     case 3:
//         console.log('березень');
//     case 4:
//         console.log('квітень');
//     case 5:
//         console.log('травень');
//     case 6:
//         console.log('червень');
//     case 7:
//         console.log('липень');
//     case 8:
//         console.log('серпень');
//     case 9:
//         console.log('вересень');
//     case 10:
//         console.log('жовтень');
//     case 11:
//         console.log('листопад');
//     case 12:
//         console.log('грудень');
//         break;
//     default:
//         console.log('неправильний номер місяця');
// }

// const text = prompt("yes | no");
// let isAccess;
// switch (text?.toLowerCase()) {
//     case 'yes':
//         isAccess = true;
//         break;
//     case 'no':
//         isAccess = false;
//         break;
//     default:
//         console.log('incorrect answer');
// }
// console.log(isAccess);

// const text = prompt("yes | no");
// let isAccess = text === 'yes' ? '+' : text === 'no' ? '-' : undefined;
// console.log(isAccess);

// let i = 0;
// const n = 10;
// while (n > i) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// let mes = '';
// let text1 = +prompt("number");
// while (text1 > i) {
//     mes = mes + '#';
//     i++;
// }
// console.log(mes);

// let myAge;
// do {
//     myAge = +prompt('age?')
// } while (!myAge || myAge < 0 || myAge > 130)
// console.log(myAge);

// let sum;
// do {
//     sum = +prompt('2 + 2 * 2')
// } while (sum !== 6)
// console.log(sum);

// const stringText = 'asdsafsdcZsgjnjvccvb';
// console.log(stringText.length, stringText[0], stringText.length - 1);

// for (let w = 0; stringText.length > w; w++) {
//     console.log(stringText[w]);
// }

// let m = '';
// n = 10;
// const countCol = 10;
// for (let i = 0; n > i; i++) {
//     m += (i + 1) + '. ';

//     for (let j = 0; j < countCol; j++) {
//         m += '#';
//     }
//     m += '\n';
// }
// console.log(m);

// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.
// const yourAgeString = prompt('Your age?',);
// const yourAge = Number(yourAgeString);
// if (isNaN(yourAge)) {
//     console.log('Enter a Number');
// } else {
//     if (yourAge <= 11) {
//         console.log('child');
//     } else if (12 <= yourAge && yourAge <= 17) {
//         console.log('teen');
//     } else if (18 <= yourAge && yourAge <= 59) {
//         console.log('adalt');
//     } else if (60 <= yourAge) {
//         console.log('pensioner')
//     }
// }

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// const numString = prompt('Enter a Number',);
// const num = Number(numString);
// switch (num) {
//     case 1:
//         alert('!');
//         break;
//     case 2:
//         alert('@');
//         break;
//     case 3:
//         alert('#');
//         break;
//     case 4:
//         alert('$');
//         break;
//     case 5:
//         alert('%');
//         break;
//     case 6:
//         alert('^');
//         break;
//     case 7:
//         alert('&');
//         break;
//     case 8:
//         alert('*');
//         break;
//     case 9:
//         alert('(');
//         break;
//     case 0:
//         alert(')');
//         break;
//     default:
//         alert('Incorrect data');
// }

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// const a = +prompt('Enter First Number',);;
// const b = +prompt('Enter Second Number',);;
// const n = (b - a) + 1;
// console.log(n);
// const sum = (n / 2) * (a + b);
// console.log(sum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// const number1 = prompt('Enter First Number',);
// const number2 = prompt('Enter Second Number',);
// let a = number1;
// let b = number2;
// while (b !== 0) {
//     const mem = a % b;
//     a = b;
//     b = mem;
// }
// const divider = a;
// console.log('Найбільший спільний дільник чисел ', divider);

// Запитай у користувача число і виведи всі дільники цього числа.
var number = prompt('Enter First Number');
var h = number;
for (var i = 1; i <= h; i++) {
  if (h % i === 0) {
    console.log(i);
  }
}

//     Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
// Зацикли відображення днів тижня таким чином: «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
//     Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?». Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
/******/ })()
;
//# sourceMappingURL=script.js.map