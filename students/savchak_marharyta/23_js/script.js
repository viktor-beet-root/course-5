//Мінімум

//2.Тобі потрібно зберігати ім’я та прізвище в змінній,
//  придумай до 4-х імен змінних, що потрібні тобі для даної задачі;
//  Також напиши до 5 неправильних імен
// (неправильні імена повинні бути закоментовані):

let firstName;
let lastName;
let fullName;


// let var;
// let name;
// let Me;
// let квіточка;
// let 99Problems;

// 3.Вкажи всі можливі способи коментування коду;

// fiirst method

/*
second method 
*/

/**third
 * method
 */

// 4.Які стилі написання імен змінних ти знаєш?

let meDanceInTheDark; //camelCase

let me_dance_in_the_dark; //snake_case


// Норма

// 1.Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

const userName = prompt('Enter your name', '');
console.log('Привіт, ' + userName);

// 2.Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
// Поточний рік вкажи в коді як константу;

const thisYear = 2023;
const userBirthYear = +prompt('Enter year of your birth', '');
const age = thisYear - userBirthYear;
console.log(age);

// 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const sideLength = +prompt('Enter length of the squares side', '');
const perimeter = sideLength * 4;
console.log(perimeter);

// Максимум

// 1.Запитай у користувача радіус кола і виведи площу такої окружності.

const radius = +prompt('Enter circle radius', '');
const circleArea = Math.PI * Math.pow(radius, 2);
console.log(circleArea);


// 2.Запитай у користувача відстань в кілометрах між двома містами і за скільки
// годин він хоче дістатися.Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const cityDistance = parseInt(prompt('Enter distance between two cities in kilometers', ''));

const driveTime = parseInt(prompt('Enter how much hours do you want to go', ''));
const speedNeeded = cityDistance / driveTime;
console.log(speedNeeded + ' km/hour');

// 3.Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.
// Курс валют зберігається в константі.

const userMoney = parseFloat(prompt('Enter how much dollars you want to exchange', ''));
const exchangeRate = 0.92;
const exchange = userMoney * exchangeRate;
console.log(exchange + ' euro');
