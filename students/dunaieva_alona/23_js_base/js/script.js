'use strict'

// Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;

// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
const firstName = 'Aliona';
const lastName = 'Dunaieva';
const fullName = firstName + ' ' + lastName;
const userName = firstName + ' ' + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(userName);
/*
const 1Name = 'Aliona'; - не може починатися з чисел;
const last Name = 'Dunaieva'; - не може містити пробілів;
const @fullName = firstName + ' ' + lastName; - не може мати ніяких символів, окрім нижнього підкреслення;
const user-Name = firstName + ' ' + lastName;- не може мати дефіз;
const true = firstName + ' ' + lastName;- Імена змінних не можуть бути однаковими з ключовими словами мови, такими як true, false, function, if;
*/

// Вкажи всі можливі способи коментування коду;
//one-line comment;
/* 
multi-line comment
multi-line comment
multi-line comment
/*
/**
 * jsDoc
 * 
 */

// Які стилі написання імен змінних ти знаєш?
/*
snake case - const first_name = 'Aliona';
camal case - const firstName = 'Aliona';
*/

// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const askFirstName = prompt('What is your name?');
const textGreeting = 'Hello, ';
console.log(textGreeting + askFirstName);

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const askAge = prompt('What is your year of birth?');
const currentYear = 2023;
const textAge = 'Age: ';
console.log(textAge + (currentYear - askAge));

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const askSideOfTheSquare = prompt('What is the length  of the side of the square?');
const squareArea = 4;
const textSqueArea = 'Square area: ';
console.log(textSqueArea + askSideOfTheSquare * 4);

// Запитай у користувача радіус кола і виведи площу такої окружності.
const askRadius = prompt('What is the radius of a circle?');
const PI = Math.PI;
const textRadiusOfCircle = 'Radius of a circle: ';
console.log(textRadiusOfCircle + (Math.PI * Math.pow(askRadius, 2)));

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const distance = prompt('Distance in kilometers?');
const time = prompt('How much time you want to cover the distance?');
const textYouMove = 'You need to move: ';
const textTime = ' hour';
console.log(textYouMove + (distance / time) + textTime);

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const dollars = prompt('the amount you want to transfer to euros?');
const euros = 0.92;
const currencyEur = ' EUR';
console.log(dollars * euros + currencyEur);
