'use strict';
// Мінімум

// Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// Готово

// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
const nameUser = 'Oksana';
const surNameUser = 'Umienchuk';
const textSample$ = 'My name is:'
const fullNameUser1 = textSample$ + ' ' + nameUser + ' ' + surNameUser;
console.log(fullNameUser1);
// const 1989Ivan = 25;
// const $_567 = 25;
// const UPI-TER = 25;
// const data = 25;
// const радіус = 25;


// Вкажи всі можливі способи коментування коду;
// commentary
/* 
commentary1
commentary2
commentary3*/

/**
 * jsDoc
 * 
 * 
 */

// Які стилі написання імен змінних ти знаєш?
// camelCase

// Норма

// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const firstName = prompt('What is your name?', '');
const textHello = 'Hello,' + ' ' + firstName;
console.log(textHello);


// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const yearNow = 2023;
const ageUser = prompt('What year are you born?', '');
const calcAge = yearNow - Number(ageUser);
const textAge = 'Your age:' + ' ' + calcAge;
console.log(textAge);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const sideSquare = prompt('Enter the side of the square', '');
const perSquare = Number(sideSquare) * 4;
const textPerSquare = 'Area of ​​a square:' + ' ' + perSquare;
console.log(textPerSquare);

// Максимум

// Запитай у користувача радіус кола і виведи площу такої окружності.
const pi = Math.PI;
const radiusCircle = prompt('Enter the radius of the circle', '');
const calcAria = 2 * pi * Number(radiusCircle);
const roundAria = calcAria.toFixed(2);
const textAria = 'Area of ​​a circle:' + ' ' + roundAria;
console.log(textAria);

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const distanceKm = prompt('What is the distance between the cities?', '');
console.log('Distance:' + ' ' + distanceKm + ' ' + 'km');
const timeGod = prompt('What a time to go?', '');
console.log('Time:' + ' ' + timeGod + ' ' + 'hour');
const speedKmGod = Math.trunc(Number(distanceKm) / Number(timeGod));
const textSpeed = 'Your speed should be:' + ' ' + speedKmGod + ' ' + 'km/hour';
console.log(textSpeed);

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const kursVal = 0.92;
const dollarEx = prompt('How much to exchange dollars for euros?', '');
const textDol = 'I have:' + ' ' + dollarEx + ' ' + 'dollars';
console.log(textDol);
const euroEx = kursVal * Number(dollarEx);
const textExch = 'I will get:' + ' ' + euroEx + ' ' + 'euros';
console.log(textExch);
