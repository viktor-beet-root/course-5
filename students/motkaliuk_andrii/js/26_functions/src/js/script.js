
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

foo(10);

function foo(num = 1) {
    console.log(num);
    // const trueNum = num || 1;
    // const trueNum = num ?? 1;
    console.log(num * num);
}
foo(0);

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


function plus(f1, f2) {
    return f1 + f2;
}
function minus(f1, f2) {
    return f1 - f2;
}
function multiple(f1, f2) {
    return f1 * f2;
}
function divade(f1, f2) {
    return f1 / f2;
}

/**
 * Function calc
 * 
 * @param {number} f1 
 * @param {number} f2 
 * @param {string} sigggn 
 * @returns {number}
 */
function culc(f1, f2, sigggn = '+') {
    switch (sigggn) {
        case '+':
            return plus(f1, f2);
        case '-':
            return minus(f1, f2);
        case '*':
            return multiple(f1, f2);
        case '/':
            return divade(f1, f2);
    }
}
const ggg = culc(culc(3, 4), culc(3, 4, '*'), '*');
console.log(ggg)
culc()


function ddss(a, b, ...other) {
    console.log(arguments);
    console.log(other)
}
ddss(1, 1, 1, 1, 1, 1, 1)
