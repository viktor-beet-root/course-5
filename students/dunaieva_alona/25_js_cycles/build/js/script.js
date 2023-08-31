/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// const nub = -3;
// console.log(nub > 0);
// if (nub > 0) console.log(1);

// if (nub > 0) {
//     console.log(1);
// } else {
//     console.log(2);
// }

// const askNumber = +prompt('Number?')
// if (!(askNumber % 2)) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// const askNumberSecond = +prompt('Number?');
// if (askNumberSecond > 0) {
//     console.log('> 0');
// } else if (askNumberSecond < 0) {
//     console.log('< 0');
// } else {
//     console.log(0);
// }
// // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// //  const askUserAge = +prompt('How old you are?');
// //  if (askUserAge >=0 && askUserAge <=11) {
// //     console.log('child');
// //  } else if (askUserAge >= 12 && askUserAge <= 17) {
// //     console.log('teenager');
// //  } else if (askUserAge >=18 && askUserAge <=59) {
// //     console.log('adult');
// //  } else if (askUserAge >= 60) {
// //     console.log('elderly people');
// //  } else {
// //     console.log('undefiend');
// //  }
// const askNumberThrid = 40;
// switch (askNumberThrid) {
//     case 10: 
//         console.log('10');
//         break;
//     case 20: 
//         console.log('20');
//         break;
//     case 40: 
//         console.log('40');
//         break;
//     default:
//         console.log('default');
// } 

// // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// // const askUserNumber = +prompt('Please enter a number');
// // let numberSymbol
// // switch (askUserNumber) {
// //     case 1:
// //         numberSymbol = '!';
// //         break;
// //     case 2:
// //         numberSymbol = '@';
// //         break;
// //     case 3:
// //         numberSymbol = '#';
// //         break;
// //     case 4:
// //         numberSymbol = '$';
// //         break; 
// //     case 5:
// //         numberSymbol = '%';
// //         break;
// //     case 6:
// //         numberSymbol = '^';
// //         break;
// //     case 7:
// //         numberSymbol = '&';
// //         break; 
// //     case 8:
// //         numberSymbol = '*';
// //         break;
// //     case 9:
// //         numberSymbol = '(';
// //         break;
// //     default:
// //         numberSymbol = 'undefiend';     
// // }
// // console.log(numberSymbol);

// // Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let firstValue = +prompt('First value');
// let secondValue = +prompt('Second value');
// let sumValue = 0;
// const sentenceValue = 'Sum of the numbers:'

// while (firstValue <= secondValue) {
//   sumValue = sumValue + firstValue;
//   firstValue++;
// }
// console.log(sentenceValue + ' ' + sumValue);

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.
var firstNum = +prompt('First of number?');
var secondNum = +prompt('Second of number?');
for (var i = firstNum > secondNum ? firstNum : secondNum; i > 0; i--) {
  if (firstNum % i === 0 && secondNum % i === 0) {
    console.log(i);
    break;
  }
}
var someNum = +prompt('Enter some number');
for (var _i = 1; someNum >= _i; _i++) {
  if (someNum % _i === 0) {
    console.log(_i);
  }
}

// const text = prompt('yes | no');
// let isA = text === 'yes' ? '+' : text === 'no' ? '-' : 'undefiend';
// console.log(isA);

// // const n = 10;
// // while(n > i) {
// //     console.log(i);
// //     i++;
// // }

// // const a = +prompt('nub?');
// // let i = 0;
// // let m = '';
// // while(a > i) {
// //     m = m + '#';
// //     i++
// // }
// // console.log(m);

// let age
// do {
//     console.log(age);
//     age = +prompt('age');
// } while (!age);

// let b;
// do {
//     b = +prompt('2 + 2 * 2');
//     console.log(b);
// } while (b !== 6);

// let n = 6;
// for (let i = 0; n > i; i++) {
//     console.log(i);
// }

// let sum = 0;
// for (let i = 0; i<=100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

var stringText = 'fgfmvfkvmfvmfmv';
console.log(stringText.length);
for (var _i2 = 0; stringText.length > _i2; _i2++) {
  console.log(stringText[_i2]);
}
var m = '';
var d = 6;
var c = 9;
for (var _i3 = 0; d > _i3; _i3++) {
  m = m + (_i3 + 1) + '. ';
  for (var j = 0; j < c; j++) {
    m = m + '#';
    //m+= '#';
  }

  m = m + '\n';
}
console.log(m);
/******/ })()
;
//# sourceMappingURL=script.js.map