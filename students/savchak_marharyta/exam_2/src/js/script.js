// //функції
// //"ще один спосі творити зсінну"

// function bar() {
//     //створюэ пространнство імен які живуть тільки в функції

//     var s;
//     console.log(s);
// }
// bar();

// //функції треба викликати, тільки тоді спрацює
// console.log(bar);

// function bar1() {
//     //створюэ пространнство імен які живуть тільки в функції

//     console.log(11111);
// }
// //функція з поічною дією
// if (confirm()) {
//     bar1();
// }

// function bar2(message) {//ще один метод створення змінної


//     console.log(massage);
// }

// bar2('Hello'); //аргумент в дужках
// bar2('Marharet'); //при кожному виклику можна надавати змінним різні аргументи

// function bar3(message, isShow) {
//     if (isShow) console.log(message);

//     console.log(massage);
// }

// bar3('Hello', true); //працює
// bar3('Marharet');//не працює

// function bar4(message, type) {
//     switch (type) {
//         case 'log':
//             console.log(message);
//             break;
//         case 'error':
//             console.error(message);
//             break;
//         case 'info':
//             console.info(message, 'dfsfsf');
//             break;
//     }

// }

// bar4('Hello', 'log'); //працює
// bar4('Marharet', 'error');//не працює
// bar4('Marharet', 'info');


// function plus(number1, number2) {

//     const sum = (+number1) + (+number2);
//     console.log(sum);
// }
// plus(3, 5);

// function foo(num = 1) {//переважно використовувати це

//     // const trueNum = num || 1;//значенн за замовчуванням
//     // const trueNum = num ?? 1; // якщо num = null або undefined, то виконується 1

//     console.log(num * num);
// }

// foo(0);
// foo(15);
// foo(10);

// {
//     function ddd(){
//         alert(2222);
//     }

//     ddd(); //спрацює
// }

// ddd(); // не спрацює

//функції можна викликати перед її записом, вона хоститься як і var




// function show(firstName, lastName, sign = '!') {
//     const greating = 'Hello';
//     let sentence = greating + ' ' + firstName + ' ' + lastName + sign;

//     console.log(sentence);

// }
// show('MArharyta', 'Savchak');
// show('MArharyta', 'Savchak', '.');

// //чиисті функції, що повертають завжди один і той самий вираз

function sum(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') return;
    // if(typeof a !== 'number' || typeof b !== 'number'){
    //     throw( 'Type is not correct'); //видати помилку
    // }
    // alert(1111);
    return a + b;
    // alert(1111); //код після return не виконується
}

// //функція завжди щось повертає
// const ss = sum(1, 2);
// const sss = sum(5, 2);

// console.log(ss, sss);


// const aaa = sum(sum(1, 2), sum(2, 2));
// console.log(aaa);
function sum(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') return;
    // if(typeof a !== 'number' || typeof b !== 'number'){
    //     throw( 'Type is not correct'); //видати помилку
    // }
    // alert(1111);
    return a + b;
    // alert(1111); //код після return не виконується
}
function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}


function calculator(a, b, sign = '+') {
    switch (sign) {
        case '+':
            return sum(a, b);
        case '-':
            return diff(a, b);
        case '*':
            return mult(a, b);
        case '/':
            return div(a, b);

    }
}

function love(a, b, ...other) {
    console.log(arguments)//працює лише з function
    //псевдомасив arguments який є лише в function перераховує змінні фунції
    console.log(other);
    //other - масив

    //... - rest оператор !почитати! збирає (spread оператор )

    //
}

love(1, 2, 3, 4, 5, 6, 7, 8, 9);

/**
 * Function calc
 *
 * @param {number} a
 * @param {number} b
 * @param {string} equal
 * @returns {number}
 */

//документуання функції
