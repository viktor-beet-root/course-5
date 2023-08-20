'use strict'

// Мінімум
// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const x = 0.1;
const y = 0.2;
const mathSum = ((x * 10 + y * 10) / 10);
console.log(mathSum);


// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const a = '1';
const b = 2;
const ab = +a + b;
console.log(ab);

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const flashSize = parseInt(prompt('Please enter USB size in GB'), 10);
const userFlash = flashSize * 1024 / 820;
const filesOnFlash = "Number of files:" + ' ' + Math.floor(userFlash);
console.log(filesOnFlash);


// Норма
// 1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const walletSum = prompt('How much money do you have?');
const chocoprice = prompt('How much chocolate bar cost?');
const chocoNumb = Math.floor(walletSum / chocoprice);
const userRest = +(walletSum % chocoprice).toFixed(2);
const userAnswer = "You will get" + ' ' + chocoNumb + " chocolate bars and you will keep" + ' ' + userRest + " usd rest";
console.log(userAnswer);

// 2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const userNumb = +prompt('Tell me random triple-digit number');
const unitNumb = (userNumb % 10);
const decimals = (Math.floor(userNumb / 10) % 10);
const hundredths = (Math.floor(userNumb / 100) % 10);
const numbReverse = unitNumb * 100 + decimals * 10 + hundredths;
const numbReverseResult = "The reverse number will be:" + numbReverse
console.log(numbReverseResult);

// Максимум
// 1.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const userDeposit = +prompt('What is your deposit summ?');
const userInterest = 5 / 100;
const ammountOfMonths = 2 * 30;
const monthlyInterest = userDeposit * userInterest / 365 * ammountOfMonths;
const userMonthlyInterest = "Your interest rate will be " + monthlyInterest.toFixed(2);
console.log(userMonthlyInterest);

// 2.Що повернуть вирази:
/*
2 && 0 && 3
Result: 0

2 || 0 || 3
Result: 2

2 && 0 || 3
Result: 3
*/

