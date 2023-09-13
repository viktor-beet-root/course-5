const nub = -3;

if (nub === 3) console.log(1);
else console.log(2);

if (nub > 0) {
    console.log(1);
} else {
    console.log(2);
}

const d = 2;

if (d % 2) {
    console.log('1');
} else {
    console.log('2');
}

if (d === 2) {
    console.log('2');
} else if ((d > 30 && !(d % 2)) || d === 3) {
    console.log('2defdfssd');
} else {
    console.log('3333333333');
}

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

//const text = prompt('yes | no?');

//let isAccsess = (text === 'yes') ? '+' : ((text === 'no') ? '-' : undefined);

// switch (text?.toLowerCase()) {
//     case 'yes':
//         isAccsess = true;
//         break;
//     case 'no':
//         isAccsess = false;
//         break;
// }

//console.log(isAccsess);
let i = 0;
let n = 6;
let message = '';

// while (n > i) {
//     message = message + '#';

//     i++;
// }

console.log(message);


// let myAge;

// do {
//     myAge = +prompt('age?');
// } while (!myAge || myAge < 0 || myAge > 120);

// console.log(myAge);
//2 + 2 * 2

const stringText = '1sfkgjhdklsfghdklsfjghlkjsdq';

console.log(stringText.length, stringText[0], stringText[stringText.length - 1]);

for (let w = 0; stringText.length > w; w++) {
    console.log(stringText[w]);
}

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

for (let i = 0; 10 > i; i++) {
    if (i === 5) break;
    if (!(i % 2)) continue;
    console.log(i);
}

// while (true) {
//     if (i++ > 20) break;
// }

//console.log(m)

//#
//##
//###
//####
//

//      #
//     ##
//    ###
//   ####


//      # #
//     ## ##
//    ### ###
//   #### ####
