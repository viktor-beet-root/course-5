"use strict";
/////////////////////////////////////////////////////////
// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.
const userAge = +prompt('How old are you?');

if (userAge >= 60) {
    console.log('You are a pensioner');
} else if (userAge >= 17) {
    console.log('You are a adult');
} else if (userAge >= 12) {
    console.log('You are a teenager');
} else if (userAge >= 0) {
    console.log('You are a child');
} else {
    console.log('default');
}


// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
const numUser = +prompt('Enter number 1-9:');
switch (numUser) {
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
        console.log('Enter another number');
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let i = +prompt('Enter first number');
let secNum = +prompt('Enter second number');
let sumNum = secNum;
while (secNum > i) {
    sumNum = sumNum + i;
    i++;
}
console.log('Cума всіх чисел в заданому користувачем діапазоні: ' + sumNum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const x = +prompt('Введіть перше число, щоб визначити найбільший спільний дільник');
const y = +prompt('Введіть друге число, щоб визначити найбільший спільний дільник');

let min = (y > x) ? x : y;
let max = (y < x) ? x : y;
console.log('min ', min);
console.log('max ', max);

while (max % min !== 0) {
    min--;
}
console.log('Найбільший спільний дільник: ' + min);

// Запитай у користувача число і виведи всі дільники цього числа.

const num1 = +prompt('Введіть число, щоб знайти всі дільники цього числа');

for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        console.log(i);
    }
}

//     Норма
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const numberPolidrom = +prompt('Введіть число із 5 цифр');

const firstNum = Math.floor(numberPolidrom / 10000);
const secondNum = Math.floor(numberPolidrom / 1000) % 10;
const fourthNum = Math.floor(numberPolidrom / 10) % 10;
const fifthNum = numberPolidrom % 10;

if (firstNum === fifthNum && secondNum === fourthNum) {
    console.log("Це поліндром");
} else {
    console.log("Це не поліндром");
}


// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.

const sumShopping = +prompt('Введіть суму покупки');

if (sumShopping >= 500) {
    const sumSeven = sumShopping - sumShopping / 100 * 7;
    console.log('Сума до оплати: ' + sumSeven);
} else if (sumShopping >= 300) {
    const sumFive = sumShopping - sumShopping / 100 * 5;
    console.log('Сума до оплати: ' + sumFive);
} else if (sumShopping >= 200) {
    const sumThree = sumShopping - sumShopping / 100 * 3;
    console.log('Сума до оплати: ' + sumThree);
} else {
    console.log('Сума до оплати: ' + sumShopping);
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
// Не виконано

// Зацикли відображення днів тижня таким чином: «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
let dayOfWeek = 'Monday';
while (confirm(dayOfWeek + '. Do you want to see the next day?')) {
    switch (dayOfWeek) {
        case 'Monday':
            dayOfWeek = 'Thuesday';
            break;
        case 'Thuesday':
            dayOfWeek = 'Wednesday';
            break;
        case 'Wednesday':
            dayOfWeek = 'Thursday';
            break;
        case 'Thursday':
            dayOfWeek = 'Friday';
            break;
        case 'Friday':
            dayOfWeek = 'Saturday';
            break;
        case 'Saturday':
            dayOfWeek = 'Sunday';
            break;
        case 'Sunday':
            dayOfWeek = 'Monday';
            break;
    }
}

//     Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?». Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
let res = '';
let p = 10;
for (let i = 1; i < p; i++) {
    res = '--' + i + '--';
    console.log(res);
    for (let j = 1; j < p; j++) {
        res = i * j;
        console.log(i + '*' + j + '=' + res);
    }
    res = '\n';
    console.log(res);
}

// Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
//Не виконано

//Побудувати такий шаблон
// #..
// ##.
// ###

let result = '';
let n = 3;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i >= j) {
            result += '#';
        } else {
            result += '.';
        }
    }
    result += '\n';
}
console.log(result);

//Побудувати такий шаблон
// ..#
// .##
// ###
let result2 = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (j >= n - i - 1) {
            result2 += '#';
        } else {
            result2 += '.';
        }
    }
    result2 += '\n';
}
console.log(result2);
