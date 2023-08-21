// const nub = 3;
// console.log(nub > 0);
// if (nub === 3) console.log(1);
// else console.log(2);


// if (nub > 0) {
//     console.log(1);

// } else {
//     console.log(2);
// }

// const numUser = prompt('Enter number');
// const numUser1 = +numUser;
// const divider = 2;
// if (numUser % divider) {
//     console.log('Непарний');
// } else {
//     console.log('Парний');
// }

const d = 33;
if (d === 2) {
    console.log(2);
} else if ((d > 30 && !(d % 2)) || d === 3) {
    console.log('2dvjndkh');
} else {
    console.log('3333333');
}


// const numUser = prompt('Enter number');
// const numUser1 = +numUser;

// if (numUser1 > 0) {
//     console.log('+');
// } else if (numUser1 < 0) {
//     console.log('-');
// } else {
//     console.log('0');
// }

// const myAge = 15;
// switch (myAge) {
//     case 10:
//         console.log('10');

//     case 15:
//     case 20:
//         console.log('15,20');
//         breake;
//     case 40:
//         console.log('40');
//         breake;
//     default:
//         console.log('default');
// }

// const numUser = +prompt('Enter month');
// switch (numUser) {
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
//         console.log('Enter another number');
// }

// const numUser = +prompt('Enter month');
// switch (numUser) {
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
//         console.log('Enter another number');
// }

// const numUser = prompt('yes | no');
// let isAccsess = numUser === 'yes' ? '+' : numUser === 'no' ? '-' : undefined;

// switch (numUser?.toLowerCase()) {
//     case 'yes':
//         isAccsess = true;
//         break;
//     case 'no':
//         isAccsess = false;
//         break;
// }
// console.log(isAccsess);

// Цикли



// let i = 0;
// const n = 10;
// while (n > i) {
//     console.log(i);

//     i++;
// }

// const numUser = +prompt('Enter number');
// let i = 0;
// let messege = '';

// while (numUser > i) {
//     messege = messege + '#';
//     i++;
// }

// console.log(messege);

// let myAge1;

// do {
//     myAge1 = +prompt('age?');
// } while (!myAge1 || myAge1 < 0 || myAge1 > 120);
// console.log(myAge1);

// let numMat;

// do {
//     numMat = +prompt('2 + 2 * 2?');
// } while (numMat !== 6);
// console.log(numMat);


// const n = 6;
// for (let i = 0; n > i; i++) {
//     console.log(i);
// }

// const stringText = 'vbhedbvkbdbvb';
// console.log(stringText.length, stringText[0], stringText[stringText.length - 1]);
// for (let w = 0; stringText.length > w; w++) {
//     console.log(stringText[w]);
// }

let m = '';
n = 10;
const countCol = 10;
for (let i = 0; n > i; i++) {
    m += (i + 1) + '. ';

    for (let j = 0; j < countCol; j++) {
        m += '#';
    }

    m += '\n';
}
console.log(m);
