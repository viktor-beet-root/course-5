// Мінімум

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

// const age = prompt('Enter your age', '');

// if (age >= 0 && age <= 11) {
//     console.log("You are a child");
// } else if (age >= 12 && age <= 17) {
//     console.log("You are a teenager");
// } else if (age >= 18 && age <= 59) {
//     console.log("You are an adult");
// } else if (age >= 60) {
//     console.log("You are an elder");
// } else {
//     console.log('This is incorrect input')
// }

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// const userNumber = prompt('Enter your number from 0 to 9', '');
// const number = Number(userNumber);
// switch (number) {
//     case 0:
//         console.log(')');
//         break;
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
// }

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let userRangeStart = Number(prompt("Enter start number of a range", ""));
// let userRangeEnd = Number(prompt("Enter last number of a range", ""));
// let range = 0;

// while (userRangeEnd >= userRangeStart) {
//     range += userRangeStart;
//     userRangeStart++;
// }
// console.log(range);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNum = Number(prompt('Please enter first number', ''));
const secondNum = Number(prompt('Please enter second number', ''));
const commonDenominator = '';
if (firstNum / commonDenominator && secondNum / commonDenominator) {

}

// 5. Запитай у користувача число і виведи всі дільники цього числа.


// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// 2.a від 200 до 300 - знижка буде 3%;
// 2.b від 300 до 500 - 5%;
// 2.c від 500 і вище - 7%.


// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
