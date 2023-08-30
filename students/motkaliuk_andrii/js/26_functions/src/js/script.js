
// function bar(message, type) {
//     switch (type) {
//         case 'log':
//             console.log(message);
//             break;
//         case 'error':
//             console.error(message);
//             break;
//         case 'info':
//             console.info(message, 'info');
//     }
// }

// bar('Hello', 'log');
// bar('Andrii', 'error');
// bar('Alina', 'info');



// function sum(aString, bString) {
//     const a = Number(aString);
//     const b = Number(bString);
//     const c = a + b;
//     console.log(c);
// }
// sum(1, 2);

// foo(10);

// function foo(num = 1) {
//     console.log(num);
// const trueNum = num || 1;
// const trueNum = num ?? 1;
//     console.log(num * num);
// }
// foo(0);

// {
//     function ddd() {
//         alert(222)
//     }
//     ddd()
// }


// function hoo(firstName, lastName, sign = '!') {
//     console.log('Hello ' + firstName + ' ' + lastName + sign);
// }
// hoo('Andrii', 'Motkaliuk', '')

// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') return;
//     return a + b;
//     alert(1111);
// }
// const ss = sum(1, 2);
// const sss = sum(5, 3);

// const aaaa = sum(sum(1, 32), sum(2, 26));

// console.log(ss, sss, aaaa)


// function plus(f1, f2) {
//     return f1 + f2;
// }
// function minus(f1, f2) {
//     return f1 - f2;
// }
// function multiple(f1, f2) {
//     return f1 * f2;
// }
// function divade(f1, f2) {
//     return f1 / f2;
// }

// /**
//  * Function calc
//  *
//  * @param {number} f1
//  * @param {number} f2
//  * @param {string} sigggn
//  * @returns {number}
//  */
// function culc(f1, f2, sigggn = '+') {
//     switch (sigggn) {
//         case '+':
//             return plus(f1, f2);
//         case '-':
//             return minus(f1, f2);
//         case '*':
//             return multiple(f1, f2);
//         case '/':
//             return divade(f1, f2);
//     }
// }
// const ggg = culc(culc(3, 4), culc(3, 4, '*'), '*');
// console.log(ggg)
// culc()


// function ddss(a, b, ...other) {
//     console.log(arguments);
//     console.log(other)
// }
// ddss(1, 1, 1, 1, 1, 1, 1)


// Мінімум

// Напиши всі можливі варіанти створення функцій.

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function sumInput() {
//     console.log(arguments.length);
// }

// sumInput(1, 2, 3, 'hello')
// sumInput(1, 2, 3, 'hello', 0)

// Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

// function comparing(aa, bb) {
//     if (aa < bb) {
//         console.log(-1);
//     } else if (aa > bb) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
// }
// comparing(1, 2);
// comparing(3, 2);
// comparing(2, 2);

// Напиши функцію, яка обчислює факторіал переданого їй числа.
// function factorial(nn) {
//     if (nn === 0 || nn === 1) {
//         return 1;
//     } else {
//         return nn * factorial(nn - 1);
//     }
// }
// const hy = factorial(6);
// console.log(hy);

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function together(di1, di2, di3) {
//     return Number(di1.toString() + di2.toString() + di3.toString())
// }
// const res = together(1, 4, 9);
// console.log(res);

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// function area(s1, s2) {
//     if (s2 === undefined) {
//         return s1 * s1;
//     } else {
//         return s1 * s2;
//     }
// }
// const res2 = area(5, 4);
// const res3 = area(5);
// console.log(res2);
// console.log(res3);


//     Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
function perfNum(num) {
    if (num <= 1) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === number;
}
console.log(perfNum(5));

// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй написану раніше функцію,
// щоб дізнатися, чи є це число досконалим.
