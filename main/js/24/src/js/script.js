//Незмінні премітивні типи

//number
const num = (2, 2.5, -1, 0, -0, Infinity, -Infinity, NaN);
console.log(NaN === NaN);
console.log('2' + 2);
console.log(isNaN(NaN));
console.log((0.1 * 10 + 0.2 * 10) / 10);
console.log(Number.MAX_SAFE_INTEGER);
console.log((2.035).toFixed(2));
console.log(Math.floor(2.8));
console.log(Math.round(2.7));
console.log(Math.ceil(2.2));

//Bigint
//2n;

// String
const string = ("s'df 2\"  da's", 'a"dsfds"f', `
sda


fdf

`);
console.log(
    "s'df \\  2\" <br> \
    \\n da's"
);

const n = 'test';

console.log(`
${n + 'sdfsd'}
${(2 + 2).toFixed(2)}
adsf
asdf
""
''
adsf
asdf
`);
let f = 'ssss';
f = f + 'a';

console.log(f.length, f.toLocaleUpperCase());
console.log(f.split('').reverse().join(''));

//
let typeUndefined; //= undefined;

typeUndefined = 2;

typeUndefined = undefined;

console.log(typeUndefined);

//
const typyNull = null;


let typeBool = true; //1
typeBool = false; //0

const typeSymbol = Symbol('dsfdsf');

//Об’єктні типи, що змінюються

const arr = [0, 1, 0, 1, 1, '', {}, [], function () { }, null, undefined];
arr[1] = [];
//[[1,0,0],[1,2,0],[1,0,0]]
console.log(arr)

const obj = {
    userName: "Vasya",
    age: 20,
    b: 21,
    2: 2
};
obj.age = 30;
console.log(obj);

//приведення типів

// Number, String, Bool
console.log(String(false), Number('2'), Boolean({}), [1, 2, 34].toString());
console.log((15).toString(16));
console.log(+'2', parseInt('1.8px'), parseFloat('1.2px'), ~~(2.5));

//
console.log(false, !!'', !!0, !!-0, !!undefined, !!null, !!NaN);
console.log(!!2121, !!Infinity);

console.log(2 == '2', 2 === '2', 2 < 5, 4 > 5, 3 <= 3, 3 >= 4);
// != !==
const a = [];
const b = a;
console.log(a === b);

console.log(+false, +true, +null, true + true, {} + {})
//

console.log(0 && 1);
console.log(1 || 0);

//const s = +prompt('age?') || 10;
//const s = +prompt('age?') ?? 10;

//console.log(s)

console.log(125 % 10); // 521
console.log(~~(125 / 100) % 10); // 521
