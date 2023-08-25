'use strict';

/* Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4 - х імен змінних, що потрібні тобі для даної задачі.
Також напиши до 5 неправильних імен(неправильні імена повинні бути закоментовані);*/
const userFirstName = "Denys";
const userLastName = "Yeremenko";
const firstNameVisitor = "Denys";
const lastNameVisitor = "Yeremenko";
/* Направильные имена
1-user-Name
Name
name
имяПользователя */

// Вкажи всі можливі способи коментування коду;
// однострочный коментарий
/* АААААААА
много строчный коментарий */
/**
 * jsDoc
 *
 */


// Які стилі написання імен змінних ти знаєш ?
//camelCase

//   Норма
// Запитай ім’я користувача та виведи у відповідь “Привіт, * ім’я *”;
const userName = prompt("Say your name, please", "");
const userNamePrint = "Привіт, " + userName;
console.log(userNamePrint);

// Запитай рік народження користувача, порахуй його / її вік і виведи результат.Поточний рік вкажи в коді як константу;
const currentDate = 2023;
const userBirthday = prompt("What year were you born?", "");
const userAge = currentDate - userBirthday;
console.log(userAge);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const sideSquare = prompt('Напиши длину стороны квадрата, я покажу его периметр', '');
const perimeterSquare = sideSquare * 4;
console.log(perimeterSquare);

// Максимум
// Запитай у користувача радіус кола і виведи площу такої окружності.
const numberPi = Math.PI;
const circleRadius = prompt('Напиш радуис окружности, а я покажу его площадь', '');
const areaCircle = numberPi * circleRadius ** 2;
console.log(areaCircle);

// Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.Курс валют зберігається в константі.
const dollarExchangeRate = 0.92;
const dollarAmount = prompt('Введи количество долларов, а я конвертирую их в Евро', '');
const evroAmount = dollarAmount * dollarExchangeRate;
const evroAmountPrint = 'Ваша сумма ' + evroAmount + ' ' + 'Евро';
console.log(evroAmountPrint);


