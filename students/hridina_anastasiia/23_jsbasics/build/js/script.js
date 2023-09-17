/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// Прописані в index.html

// 2.Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. 
//Також напиши до 5 неправильних імен(неправильні імена повинні бути закоментовані);

var userName = 'Anastasia';
var userSurname = 'Hridina';
var userFullname = userName + ' ' + userSurname;
console.log(userFullname);

/**
 * let 1b - variable name cannot start with a digit;
 * let full-name - hyphens aren't allowed in the name;
 * let прізвище - it is not recommended to use cyrillic letters;
 * let # - variable name cannot contain special characters (except "$" and "_";
 * let let - variable name cannot be a keyword;
*/

// 3. Вкажи всі можливі способи коментування коду;

// - single-line comment;

/** 
 * multi-line comment 
* */

// 4. Які стилі написання імен змінних ти знаєш?
// camelCase;
// snake_case.

//Норма

// 1.Запитай ім’я користувача та виведи у відповідь “Привіт, * ім’я *”;
var userFirstName = prompt('What is your name?', '');
console.log('Hello,' + ' ' + userFirstName);

// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
var userBirthYear = prompt('What year were you born in?', '');
var currentYear = '2023';
var age = currentYear - userBirthYear;
console.log('You are' + ' ' + age);

// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
var squareSideLength = prompt('What is the side length of a square?', '');
var squareP = squareSideLength * 4;
console.log('The side length of a square is' + ' ' + squareP);

//Максимум

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.
var circleRadius = prompt('What is the radius of a circle?', '');
var PI = Math.PI;
var circleArea = PI * Math.pow(circleRadius, 2);
console.log('The area of a circle is' + ' ' + circleArea);

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
//Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
var cityDistance = prompt('What is the distance between city A and city B (in km.)?', '');
var driveTime = prompt('How many hours should the road there take?', '');
var driveSpeed = cityDistance / driveTime;
console.log('The speed is' + ' ' + driveSpeed + ' ' + 'km/h');

// 3. Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.Курс валют зберігається в константі.
var rate = '0.92';
var dollar = prompt('Please enter the amount of dollars you would like to convert into euros', '');
var euro = dollar * rate;
console.log('You will get' + ' ' + euro + ' ' + 'euros');
/******/ })()
;
//# sourceMappingURL=script.js.map