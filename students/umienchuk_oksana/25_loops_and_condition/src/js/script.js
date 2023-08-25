"use strict";
// const nub = 3;
// console.log(nub > 0);
// if (nub === 3) console.log(1);
// else console.log(2);


// if (nub > 0) {
//     console.log(1);

// } else {
//     console.log(2);
// }

// const numUser = prompt('Enter number');
// const numUser1 = +numUser;
// const divider = 2;
// if (numUser % divider) {
//     console.log('Непарний');
// } else {
//     console.log('Парний');
// }

// const d = 33;
// if (d === 2) {
//     console.log(2);
// } else if ((d > 30 && !(d % 2)) || d === 3) {
//     console.log('2dvjndkh');
// } else {
//     console.log('3333333');
// }


// const numUser = prompt('Enter number');
// const numUser1 = +numUser;

// if (numUser1 > 0) {
//     console.log('+');
// } else if (numUser1 < 0) {
//     console.log('-');
// } else {
//     console.log('0');
// }

// const myAge = 15;
// switch (myAge) {
//     case 10:
//         console.log('10');

//     case 15:
//     case 20:
//         console.log('15,20');
//         breake;
//     case 40:
//         console.log('40');
//         breake;
//     default:
//         console.log('default');
// }

// const numUser = +prompt('Enter month');
// switch (numUser) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Enter another number');
// }

// const numUser = +prompt('Enter month');
// switch (numUser) {
//     case 1:
//         console.log('January');
//     case 2:
//         console.log('February');
//     case 3:
//         console.log('March');
//     case 4:
//         console.log('April');
//     case 5:
//         console.log('May');
//     case 6:
//         console.log('June');
//     case 7:
//         console.log('July');
//     case 8:
//         console.log('August');
//     case 9:
//         console.log('September');
//     case 10:
//         console.log('October');
//     case 11:
//         console.log('November');
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Enter another number');
// }

// const numUser = prompt('yes | no');
// let isAccsess = numUser === 'yes' ? '+' : numUser === 'no' ? '-' : undefined;

// switch (numUser?.toLowerCase()) {
//     case 'yes':
//         isAccsess = true;
//         break;
//     case 'no':
//         isAccsess = false;
//         break;
// }
// console.log(isAccsess);

// Цикли



// let i = 0;
// const n = 10;
// while (n > i) {
//     console.log(i);

//     i++;
// }

// const numUser = +prompt('Enter number');
// let i = 0;
// let messege = '';

// while (numUser > i) {
//     messege = messege + '#';
//     i++;
// }

// console.log(messege);

// let myAge1;

// do {
//     myAge1 = +prompt('age?');
// } while (!myAge1 || myAge1 < 0 || myAge1 > 120);
// console.log(myAge1);

// let numMat;

// do {
//     numMat = +prompt('2 + 2 * 2?');
// } while (numMat !== 6);
// console.log(numMat);


// const n = 6;
// for (let i = 0; n > i; i++) {
//     console.log(i);
// }

// const stringText = 'vbhedbvkbdbvb';
// console.log(stringText.length, stringText[0], stringText[stringText.length - 1]);
// for (let w = 0; stringText.length > w; w++) {
//     console.log(stringText[w]);
// }

// let m = '';
// let n = 5;
// const countCol = 10;
// for (let i = 0; n > i; i++) {
//     m += (i + 1) + '. ';

//     for (let j = 0; j < countCol; j++) {
//         m += '#';
//     }

//     m += '\n';
// }
// console.log(m);

/////////////////////////////////////////////////////////
// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.
// const userAge = +prompt('How old are you?');

// if (userAge >= 60) {
//     console.log('You are a pensioner');
// } else if (userAge >= 17) {
//     console.log('You are a adult');
// } else if (userAge >= 12) {
//     console.log('You are a teenager');
// } else if (userAge >= 0) {
//     console.log('You are a child');
// } else {
//     console.log('default');
// }


// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// const numUser = +prompt('Enter number 1-9:');
// switch (numUser) {
//     case 1:
//         console.log('!');
//         break;
//     case 2:
//         console.log('@');
//         break;
//     case 3:
//         console.log('#');
//         break;
//     case 4:
//         console.log('$');
//         break;
//     case 5:
//         console.log('%');
//         break;
//     case 6:
//         console.log('^');
//         break;
//     case 7:
//         console.log('&');
//         break;
//     case 8:
//         console.log('*');
//         break;
//     case 9:
//         console.log('(');
//         break;
//     default:
//         console.log('Enter another number');
// }

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// let i = +prompt('Enter first number');
// let secondNum = +prompt('Enter second number');
// let sumNum = secondNum;
// while (secondNum > i) {
//     sumNum = sumNum + i;
//     i++;
// }
// console.log(sumNum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// const x = +prompt('Enter the first number to determine the greatest common divisor');
// const y = +prompt('Enter the second number to determine the greatest common divisor');

const x = 5;
const y = 125;
// let min = Math.min(x, y);
// let max = Math.max(x, y);

let min = (y > x) ? x : y;
let max = (y < x) ? x : y;
console.log('min ', min);
console.log('max ', max);

while (max % min !== 0) {
    min--;
}
console.log(min);

// if (x > y) {
//     // let bigNum = x;
//     // let litNum = y;
//     console.log(x, y);

//     while (y % x == 0 && y !== 0) {
//         while (x % y == 0) {
//             console.log('НСД = ' + y);
//             break;
//         }
//         y--;
//     }
// } else if (y > x) {
//     while (x % x == 0) {
//         while (y % x == 0) {
//             console.log('НСД = ' + x);
//             break;
//         }
//         x--;
//     }
// } else {
//     console.log('НСД = ' + y);
// }


// Запитай у користувача число і виведи всі дільники цього числа.

// const num1 = +prompt('Enter a number to find all divisors of that number');

// for (let i = 1; i <= num1; i++) {
//     if (num1 % i == 0) {
//         console.log(i);
//     }
// }

//     Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
// Зацикли відображення днів тижня таким чином: «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
// let dayOfWeek = 'Monday';
// while (confirm(dayOfWeek + '. Хочеш побачити наступний день?')) {
//     switch (dayOfWeek) {
//         case 'Monday':
//             dayOfWeek = 'Thuesday';
//             break;
//         case 'Thuesday':
//             dayOfWeek = 'Wednesday';
//             break;
//         case 'Wednesday':
//             dayOfWeek = 'Monday';
//             break;
//     }
// }
//     Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?». Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

// {
//     let res = '';
//     let n = 3;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (j >= i + 1) {
//                 res += '.';
//             } else {
//                 res += '#';
//             }
//         }

//         res += '\n';
//     }
//     console.log(res);
// }



// {
//     let res = '';
//     let n = 3;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (j >= n - i - 1) {
//                 res += '#';
//             } else {
//                 res += '.';
//             }
//         }

//         res += '\n';
//     }
//     console.log(res);
// }


//fuction

//Мінімум

//Напиши всі можливі варіанти створення функцій.
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function func1() {
//     console.log(arguments.length);
// }

// func1(1);
// func1(1, 2);
// func1(2, 3, 4, 5);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.



// Напиши функцію, яка обчислює факторіал переданого їй числа.



// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// function func1() {
//     if(arguments.length == 2)
//     {
//         return arguments[0] * arguments[1];
//     } else if(arguments.length == 1)
//     {
//         return arguments[0] * arguments[0];
//     } else
//     {
//         //error
//     }
// }

// function func1(a, b) {
//     if(b == undefined)
//     {
//         return a * a;
//     } else{
//         return a * b;
//     }
// }

// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
