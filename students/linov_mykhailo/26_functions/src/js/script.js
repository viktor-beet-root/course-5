const nub = -3;

if (nub === 3) console.log(1);
else console.log(2);

if (nub > 0) {
    console.log(1)
} else {
    console.log(2)
};

const d = 32;
if (d % 2) {
    console.log('It is an odd number');
}
else {
    console.log('It is an even number')
};

if (d === 2) {
    console.log('2');
} else if ((d > 30 && !(d % 2)) || d === 3) {
    console.log('2sdafasdf');
} else {
    console.log('333333');
}

// const numberUser = prompt("enter number");
// const number = Number(numberUser);
// if (number > 0) {
//     console.log('It is a positive number')
// } else if (number < 0) {
//     console.log('It is a negative number')
// } else {
//     console.log('It is 0')
// }

// const myAge = 20;

// switch (myAge) {
//     case 10:
//         console.log('10');
//     case 15:
//     case 20:
//         console.log('15,20');
//         break;
//     case 40:
//         console.log('40');
//         break;
//     default:
//         console.log('default');
// }

// const monthUser = prompt('Enter month number');
// const month = Number(monthUser);
// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Year only has 12 months');
//         break;
// }
// switch (month) {
//     case 1:
//         console.log('January');
//     case 2:
//         console.log('February');
//     case 3:
//         console.log('March');
//     case 4:
//         console.log('April');
//     case 5:
//         console.log('May');
//     case 6:
//         console.log('June');
//     case 7:
//         console.log('July');
//     case 8:
//         console.log('August');
//     case 9:
//         console.log('September');
//     case 10:
//         console.log('October');
//     case 11:
//         console.log('November');
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Year only has 12 months');
//         break;
// }

// const word = prompt('yes | no?');
// let answer = word === 'yes' ? '+' : word === 'no' ? '-' : undefined;
// switch (word?.toLowerCase()) {
//     case 'yes':
//         answer = true;
//         break;
//     case 'no':
//         answer = false;
//         break;
//     default:
//         break;
// }
// console.log(answer);

// let i = 0;
// const n = 6;

// while (n > i) {

//     console.log(i);
//     i++;
// }
// let i = 0;
// const n = prompt("enter your number");
// let message = '';

// while (n > i) {
//     message = message + '#';
//     i++;
// }
// console.log(message);

// let myAge;

// do {
//     myAge = +prompt('age?');
// } while (!myAge || myAge < 0 || myAge > 120);
// console.log(myAge); 20

// let userGuess;

// do {
//     userGuess = +prompt('2+2*2?');
// } while (userGuess !== 6);
// console.log(userGuess);

// const stringText = 'asdfasdfasdfasdfgsdfg';

// console.log(stringText.length);

// for (let i = 0; stringText.length > i; i++) {
//     console.log(stringText[i])
// }

let m = '';
n = 10;
const countCol = 5;
for (let i = 0; n > i; i++) {
    m += (i + 1) + '. ';
    for (let j = 0; j < countCol; j++) {
        m += '#';
    }
    m += '\n';
}
console.log(m);
