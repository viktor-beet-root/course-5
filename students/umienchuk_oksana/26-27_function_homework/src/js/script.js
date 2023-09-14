//Мінімум

//Напиши всі можливі варіанти створення функцій.
// Function Declaration
// Function Expression
// стрілкові функції”

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function funcLength() {
    console.log(arguments.length);
}

funcLength(1);
funcLength(1, 2);
funcLength(2, 3, 4, 5);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function numReturn(x, y) {
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
}

console.log(numReturn(100, 25));

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function numFactorial(n) {
    let facktorial = n;
    for (i = 1; n > i; i++) {
        facktorial = facktorial * (n - i);
    }
    return facktorial;
};
console.log(numFactorial(5));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function combiningInString(firstNum, secondNum, thirdNum) {
    let totalNumber = firstNum * 100 + secondNum * 10 + thirdNum;
    return totalNumber;
}

console.log(combiningInString(5, 9, 7))


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calcArea(sideFirst, sideSecond) {
    if (arguments.length === 2) {
        return sideFirst * sideSecond;
    } else if (arguments.length === 1) {
        return sideFirst * sideFirst;
    } else {
        return "Error";
    }
}

console.log(calcArea(6, 2, 3))

function func1(sideFirst, sideSecond) {
    if (sideSecond == undefined) {
        return sideFirst * sideFirst;
    } else {
        return sideFirst * sideSecond;
    }
}
console.log(func1(7, 3))


// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function numPerfect(z) {
    let sumPerfect = 0;
    for (let j = 1; j < z; j++) {
        if (z % j === 0) {
            sumPerfect = sumPerfect + j;
        }
    }

    // sumPerfect === z ? console.log('Число ' + z + ' досконале') : console.log('Число ' + z + ' не досконале')
    return sumPerfect === z;
}

console.log(numPerfect(6))

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findPerf(a, b) {
    let min = (a > b) ? b : a;
    let max = (a < b) ? b : a;
    console.log('Min: ' + min);
    console.log('Max: ' + max);

    for (let p = min; p <= max; p++) {
        if (numPerfect(p)) {
            console.log('Число ' + p + ' досконале');
        }
    }
}


console.log(findPerf(30, 6))
