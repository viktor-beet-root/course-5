'use strict';
// Мінімум

// Виконай додавання 0, 1 і 0, 2 добийся математично правильної відповіді.
const x = 0.1;
const y = 0.2;
const xy = (x * 10 + y * 10) / 10;
const stringOne = 'Sum:' + ' ' + xy;
console.log(stringOne);

// Виконай додавання рядка "1" і цифри 2(обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const stringTwo = '1';
const numberTwo = 2;
const sumStringNumber = Number(stringTwo) + numberTwo;
const stringThree = 'Sum:' + ' ' + sumStringNumber;
console.log(stringThree);

// Користувач вказує обсяг флешки в Гб.Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const gigaBytes = prompt('How many Gb are on a flash drive?', '');
const megaBytes = 1000; //number of megabytes in 1 gigabyte
const fileMegaBytes = 820; //
const howManyFiles = (+gigaBytes * megaBytes) / 820; //single file size
const filesRounding = 'Files fit on a flash drive:' + ' ' + Math.floor(howManyFiles);
console.log(filesRounding);

//     Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const totalMoney = +prompt('How much money is in the wallet?', '');
const priceChocolate = +prompt('What is the price of chocolate?', '');
const numberOfChocolates = totalMoney / priceChocolate; //number of chocolates
const numberChocRounding = Math.floor(numberOfChocolates); //rounding
const numberChocRounString = 'You can buy chocolates:' + ' ' + numberChocRounding;
console.log(numberChocRounString);
const changeMoney = +totalMoney - numberChocRounding * priceChocolate; //cash change
console.log(changeMoney.toFixed(2));


// Запитай у користувача тризначне число і виведи його задом наперед.Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const numberOfUser = +prompt('Enter a three-digit number', '');
const unitsUser = numberOfUser % 10;
const tensUser = ~~(numberOfUser / 10) % 10;
const hundredsUser = ~~(numberOfUser / 100) % 10;
console.log('Your number:' + ' ' + String(unitsUser) + String(tensUser) + String(hundredsUser));
console.log('Your number:' + ' ' + unitsUser + tensUser + hundredsUser);

// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5 % річних.Вивести суму нарахованих відсотків.
const originalDeposit = prompt('What is the deposit amount?', '');
const totalMonths = prompt('How many months is the deposit?', '');
const persentOfDeposite = 5; //percentage of the deposit rate for the year
const totalDeposite = +originalDeposit * persentOfDeposite * Number(totalMonths) / 12 / 100;
const totalDepositeRouting = 'Your deposit interest:' + ' ' + totalDeposite.toFixed(2);
console.log(totalDepositeRouting);

// Що повернуть вирази:
// 2 && 0 && 3
0;
console.log(2 && 0 && 3);
// 2 || 0 || 3
2;
console.log(2 || 0 || 3);
// 2 && 0 || 3
3;
console.log(2 && 0 || 3);
