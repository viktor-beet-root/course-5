function bar(message, type) {
    switch (type) {
        case 'log':
            console.log(message);
            break;
        case 'error':
            console.error(message);
            break;
        case 'info':
            console.info(message, 'info');
    }
}

bar('Hello', 'log');
bar('Viktor', 'error');
bar('Viktordfdfsg', 'info');

// if (confirm()) {
//     bar();
// }

foo(100);

function foo(num = 1) {
    //const truNum = num || 1;
    //const truNum = num ?? 1;

    console.log(num * num);
}

foo();
foo(15);
foo(10);

// {
//     function ddd() {
//         alert(2222);
//     }
//     ddd();
// }

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return;


    return a + b;
    alert(1111);
}

const ss = sum('s', 2);
const sss = sum(5, 2);

const aaaa = sum(sum(1, 2), sum(2, 2));

console.log(ss, sss);


function summ(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function multy(a, b) {
    return a * b;
}

/**
 * Funtion calc
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {string} equal 
 * @returns {number}
 */
function calc(a, b, equal = '+') {
    switch (equal) {
        case '+':
            return summ(a, b);
        case '-':
            return minus(a, b);
        case '/':
            return div(a, b);
        case '*':
            return multy(a, b);
    }
}
const calcul = calc(8, 2, '-');
console.log(calcul);

function ddss(a, b, ...other) {
    console.log(arguments);
    console.log(other);
}

ddss(1, 1, 1, 1, 1, 1, 1);
