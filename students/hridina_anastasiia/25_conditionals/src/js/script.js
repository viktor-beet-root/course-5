// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11), підлітком(12 - 17), 
// дорослим(18_59) або пенсіонером(60 ...), передбач можливість введення невірних даних.

const userAge = +prompt('How old are you?', '');

if (userAge === 0 || userAge <= 11) {
    console.log('You are a child');
} else if (userAge >= 12 && userAge <= 17) {
    console.log('You are a teenager');
} else if (userAge >= 18 && userAge <= 59) {
    console.log('You are an adult');
} else if (userAge >= 60 && userAge <= 120) {
    console.log('You are a senior citizen');
} else if (userAge < 0 || userAge > 120) {
    console.log('default');
}


// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші(1!, 2 @, 3 # і т.д).

const anyNumber = +prompt('Enter a number from 0 to 9', '');

switch (anyNumber) {
    case 0:
        console.log(')');
        break;
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
        console.log('default');
}


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const numRange1 = +prompt('Enter an initial value', '');
const numRange2 = +prompt('Enter a final value', '');
let a = (numRange2 - numRange1) + 1;
let b = (numRange1 + numRange2);
const rangeSum = (a * b) / 2;

console.log(rangeSum);


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const m = +prompt('Enter any number', '');
const n = +prompt('Enter any number again', '');
let j = m;
let r = n;

while (j !== 0 && r !== 0) {
    if (j > r) {
        j = j % r;
    } else {
        r = r % j;
    }
}

const divider = j + r;
console.log(divider);


// Запитай у користувача число і виведи всі дільники цього числа.

const aNumber = +prompt('Please enter a number', '');

for (let i = 1; i <= aNumber; i++) {
    if (aNumber % i == 0) {
        console.log(i);
    }
}


// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const fiveDigitNum = +prompt('Please enter a 5-digit number', '');
let y = fiveDigitNum;
let reversed = 0;
k = y;
w = y;

while (y > 0) {
    k = y % 10;
    reversed = reversed * 10 + k;
    y = parseInt(y / 10);
}
console.log(reversed);

if (w == reversed) {
    console.log("It is a palindrome", reversed);
} else {
    console.log('It is not a palindrome', reversed);
}


// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %; 
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.

const sumTotal = +prompt('What is the total cost of your purchase?', '');
let threePercent = (sumTotal / 100) * 3;
let fivePercent = (sumTotal / 100) * 5;
let sevenPercent = (sumTotal / 100) * 7;

if (sumTotal >= 200 && sumTotal < 300) {
    console.log(sumTotal - threePercent);
} else if (sumTotal >= 300 && sumTotal < 500) {
    console.log(sumTotal - fivePercent);
} else if (sumTotal >= 500) {
    console.log(sumTotal - sevenPercent);
}


//===================================

let space = '';
n = 4;

for (let i = 0; n > i; i++) {
    space += (i + 1) + ' ';

    for (let j = 0; j <= i; j++) {
        space += '#';
    }

    space += '\n';
}

console.log(space);

//====================================

let emptySpace = '';
h = 4;

for (let i = 1; i <= h; i++) {
    emptySpace += i + ' ';

    for (let y = i; y < h; y++) {
        emptySpace += ' '
    }

    for (let y = 0; y < i; y++) {
        emptySpace += '#';
    }

    emptySpace += '\n';
}

console.log(emptySpace);

//====================================

let gap = '';
line = 4;

for (let i = 1; i <= line; i++) {
    gap += i + ' ';


    for (let g = i; g < line; g++) {
        gap += ' '
    }

    for (let g = 0; g < i; g++) {
        gap += '#';
    }

    for (let w = 3; w < line; w++) {
        gap += ' ';
    }

    for (let w = 0; w < i; w++) {
        gap += '#';
    }

    gap += '\n';
}

console.log(gap);

