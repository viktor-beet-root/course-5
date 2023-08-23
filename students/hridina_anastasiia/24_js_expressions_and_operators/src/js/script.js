// Мінімум

// 1.Виконай додавання 0, 1 і 0, 2 добийся математично правильної відповіді.
const d = 0.1 * 10;
const s = 0.2 * 10;
const sd = (d + s) / 10;
console.log(sd);

// 2.Виконай додавання рядка "1" і цифри 2(обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const one = "1";
const two = 2;
const total = +"1" + 2;
console.log(total);

// 3.Користувач вказує обсяг флешки в Гб.Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const flashCard = +prompt('Please enter the storage of your memory card in GB', '');
const oneFile = 820;
const amount = (flashCard * 1000) / oneFile;
console.log(Math.round(amount));

//Норма

// 1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
//Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const sumOfMoney = +prompt('Please enter the amount of money you have in cash', '');
const oneBarPrice = +prompt('Please enter the price of one chocolate bar', '');
const amountOfBars = Math.round(sumOfMoney / oneBarPrice);
const change = (sumOfMoney % amountOfBars).toFixed(2);
const result = 'You can buy' + ' ' + amountOfBars + ' ' + 'chocolate bars.' + ' ' + 'Your change is' + ' ' + change;
console.log(result);


// 2.Запитай у користувача тризначне число і виведи його задом наперед.Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const number = +prompt('Please enter a three digit number', '');
const firstN = number % 10;
const secondN = (~~(number / 10) % 10);
const thirdN = (~~(number / 100) % 10);
const isResult = firstN + '' + secondN + '' + thirdN;
console.log(isResult);

// Максимум

// 1.Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5 % річних.Вивести суму нарахованих відсотків.
const depositSum = +prompt('Please enter a deposit amount', '');
const depositPercentage = 5;
const percentPerMonth = depositPercentage / 12;
const percentPerTwoMonths = percentPerMonth * 2;
console.log(percentPerTwoMonths.toFixed(2));

// 2.Що повернуть вирази:

// 2 && 0 && 3 // 0;

// 2 || 0 || 3 // 2;

// 2 && 0 || 3 // 3
