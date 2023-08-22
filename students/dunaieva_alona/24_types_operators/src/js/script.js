//***Мінімум***
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const a = 0.1;
const b = 0.2;
console.log ((a * 10 + b * 10) / 10);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const first = '1';
const x = 2;
console.log(Number(first) + x);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const askGB = +prompt('What is your flash drive capacity in GB?');
const driveMB = 820;
const driveGBinMB = 1024;
const numberOfFiles = ((askGB * driveGBinMB) / driveMB);
console.log('Nunbers of files:' + ' ' +  parseInt(numberOfFiles));


// ***Норма***

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const askMoney = +prompt ('How much money you have available?');
const askPriceСhocolates = +prompt ('What is the price of a chocolate?');
const numberOfChocolates = Math.floor(+askMoney / +askPriceСhocolates);
console.log('Number of chocolate:' + ' ' +  numberOfChocolates);

const cash = (askMoney - numberOfChocolates * askPriceСhocolates);
console.log('fund balance:' + ' ' +  cash.toFixed(2));

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const userNumber = +prompt ('Enter your number');
const units = +userNumber % 10; 
const tens = ~~(+userNumber / 10) % 10; 
const hundreds = ~~(+userNumber / 100) % 10;
const result = ((units * 100) + (tens * 10) + hundreds);
console.log(result);

// ***Максимум***

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const askDeposit = +prompt('what is the amount of the deposit?');
const percentDeposit = 0.05;
const periodDepsit = 2;
console.log('Amount of accrued annual interest:' + ' ' + ((askDeposit * (percentDeposit / 12)) * 2).toFixed(2));

// Що повернуть вирази:
console.log(2 && 0 && 3); // 0, оскільки логічний оператор && повертає false, а в даному прикладі false являється 0. 
console.log(2 || 0 || 3); //2, оскільки логічний оператор  || повертає true, а в даному прикладі 2 найперше значення, далі код вже не читається
console.log(2 && 0 || 3); //3, оскільки спочатку поверається 0, далі це має наступний вигляд 0 || 3. З даного виразу можна зробити висновок що оператор повертає true, а, отже 3.
 