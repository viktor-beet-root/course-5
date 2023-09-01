// Мінімум


// 1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const fractions = (0.1 * 10 + 0.2 * 10) / 10;
console.log(fractions);

// 2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const one = '1';
const two = 2;
const sum = +one + two;
console.log(sum);

// 3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const amountOfFlashMemory = parseInt(prompt('Enter amount of memory on your memorystick in GB', ''));
const GbyteToMbyte = 1024 * amountOfFlashMemory;
const files820Mbyte = Math.floor(GbyteToMbyte / 820);
console.log('You can place ' + files820Mbyte + ' files as large as 820 megabytes on your memorystick');


// Норма

// 1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач
// і скільки здачі у нього залишиться.

const amountOfMoney = parseInt(prompt('Enter amount of your money', ''));
const costOfChocolate = parseInt(prompt('Enter the cost of one chocolate', ''));
const chocolatesAbleToBuy = Math.floor(amountOfMoney / costOfChocolate);
const change = amountOfMoney - (chocolatesAbleToBuy * costOfChocolate);
console.log('You can buy ' + chocolatesAbleToBuy + ' chocolates and you will have change in a size of ' + change);

// 2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const neededNumber = +prompt('Enter a three-digit number', '');
const backwards = ((neededNumber % 10) * 100) + ((neededNumber - (neededNumber % 10)) % 100) + ((neededNumber - (neededNumber % 100)) / 100);
console.log(backwards);


// Максимум

// 1.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних.
//Вивести суму нарахованих відсотків.

const deposit = +prompt('Enter your deposit', '');
const annualPayout = (deposit / 100) * 5;
const monthPayout = (annualPayout / 12) * 2;
const profitPrecent = ((monthPayout * 100) / deposit).toFixed(3);
console.log('Your two months precents of profit are ' + profitPrecent);

// 2.Що повернуть вирази:

//  2 && 0 && 3

/*
this expression will return 0, because operator && returns true only if all operands are true. 
here we have "0", wich value is always false. In that case program will stop working and return 0;
*/

console.log(2 && 0 && 3);


//  2 || 0 || 3

/*
this expression will return 2, because operator || returns false only if all operands are false.
here we have only one "0", wich value is always false. In that case program will stop working on "2" and return this value;
*/

console.log(2 || 0 || 3);

// 2 && 0 || 3

/*
this expression will return 3, because operator && stops on false value, wich is "0". Than we have || operator, wich compare the result of
the first coparison and number 3, than returns true value? wich is "3".
*/

console.log(2 && 0 || 3);
