// Мінімум
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const a = 0.1;
const b = 0.2;
const c = (a * 10 + b * 10) / 10;
console.log(c);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const stringOne = '1';
const numberTwo = 2;
const sum = Number(stringOne) + numberTwo;
console.log(sum);


// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const flashDrive = +prompt('Укажите размер флешки в гигабайтах');
const text = "Количество файлов которые поместяться на флешку:";
const sumFile = Math.floor(flashDrive * 1024 / 820);
console.log(text, sumFile);

// Норма
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const cashWallet = +prompt('Введите сколько у Вас денег');
const priceChokolat = +prompt('Сколько стоит шоколадка?');
const sumChokolat = Math.floor(cashWallet / priceChokolat);
const text3 = 'Количество шоколадок:';
console.log(text3, sumChokolat);
const text4 = 'Ваша сдача:';
const surrender = (cashWallet - priceChokolat * sumChokolat).toFixed(2);
console.log(text4, surrender);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const userNumber = +prompt("Введите трехзначное число");

const hundreds = userNumber % 10;
const tens = userNumber % 100 - hundreds;
const units = userNumber % 1000 - hundreds - tens;
// Десятки не расчитываем так как они и так десятки
const hundredsFlipper = hundreds * 100;
const unitsFlipper = units / 100;
const userNumberFlipper = hundredsFlipper + tens + unitsFlipper;

const textNumberUser = "Число которое вы ввели";
console.log(textNumberUser, userNumber);
const textNumberFlipper = "Ваше число задом наперед";
console.log(textNumberFlipper, userNumberFlipper);


// Максимум
// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const userMoneyBank = +prompt("Введите сумму вклада");
const textUserMoneyBank = "Ваша сумма полученных процентов по вкладу:";
const userDepositInterest = ((userMoneyBank / 12 * 5 * 2) / 100).toFixed(2);

console.log(textUserMoneyBank, userDepositInterest);


// Що повернуть вирази:
//  2 && 0 && 3
// Ответ 0

//  2 || 0 || 3
// ответ 2

// 2 && 0 || 3
// ответ 3
