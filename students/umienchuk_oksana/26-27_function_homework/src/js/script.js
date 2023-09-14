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
console.log(numFactorial(7));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function combiningInString(firstNum, secondNum, thirdNum) {
    let totalString = '' + firstNum + secondNum + thirdNum;
    return totalString;
}

console.log(combiningInString(5, 9, 7))


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
