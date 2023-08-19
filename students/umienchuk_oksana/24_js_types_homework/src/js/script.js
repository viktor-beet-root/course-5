// //незмінні примітивні типи

// //number
// const num = (2, 2.5, -1, 0, -0, Infinity, -Infinity, NaN);

// console.log(NaN === NaN);
// console.log('2' + 2);
// console.log(isNaN(NaN));
// console.log((0.1 * 10 + 0.2 * 10) / 10);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log((2.3456456985).toFixed(2));
// console.log((2).toFixed(2));
// console.log(typeof (2.3456456985).toFixed(2));
// console.log(Math.floor(2.5));
// console.log(Math.round(2.7));
// console.log(Math.ceil(2.3));

// //Bigint
// //2n + 1n;

// // String
// const string = ("cs'nck'j", 'djc2\"hsk', `geeedf`);
// console.log("djc \\  2\" \n hsk");
// console.log(`nlnv
// vjdnlvjn
// djlvnjk
// dvbkbh`);

// const n = 'test';
// console.log(`
// ${n}
// ${n + n}
// ${n + 2}
// ${n + 'test'}
// vjdnlvjn
// djlvnjk
// `);

// let f = 'sssss';
// f = f + 'a';

// console.log(f.length, f.toLocaleUpperCase());
// console.log(f.split('').reverse().join(''));

// //undefined
// let typeUndefined;
// typeUndefined = 2;

// typeUndefined = undefined;

// console.log(typeUndefined);

// //null
// const typeNull = null;


// //Booler
// let typeBool = true; //1
// typeBool = false; //0

// const typeSymbol = Symbol('vnjkdnvk');


// //Об'єктні типи, що змінюються

// const arr = [0, 1, 0, 1]; //, '', {}, [], null, undefined, function
// arr[0] = 1;
// console.log(arr);
// // [[, 0, 0], [1, 2, 0], [1, 1, 0]]

// const obj = {
//     userName: "Vasya",
//     age: 20,
//     b: 21,
//     2: 2
// };

// obj.age = 30;
// console.log(obj);

// //приведення типів

// //Number, String, Bool
// console.log(String(false), Number('2'), Boolean({}), [1, 2, 34].toString());
// console.log((15).toString(16));
// console.log(+'34', parseInt('1.1px'), parseFloat('1.2'), ~~(2.5));


// //!!!!!!!!!
// console.log(false, !!'', !!0, !!-0, !!undefined, !!null, !!NaN);
// console.log(!!2121, !!Infinity);
// //!= !==

// console.log(2 == '2', 2 === '2', 2 < 5, 4 > 5, 3 <= 3, 3 <= 4);
// const a = [];
// const b = a;
// console.log(a === b);

// console.log(+false, +true, +null, true + true, [] + []);

// //
// console.log(1 && 0); //і
// console.log(1 || 0); //або

// //const s = +prompt('age?') || 10;
// // const s = +prompt('age?') ?? 10;
// // console.log(s);

// console.log(12 % 2)



// Мінімум

// Виконай додавання 0, 1 і 0, 2 добийся математично правильної відповіді.
const x = 0.1;
const y = 0.2;
const xy = (x * 10 + y * 10) / 10;
const stringOne = 'Sum:' + ' ' + xy;
console.log(stringOne);

// Виконай додавання рядка "1" і цифри 2(обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const stringTwo = '1';
const numberTwo = 2;
const sumStringNumber = Number(stringTwo) + numberTwo;
const stringThree = 'Sum:' + ' ' + sumStringNumber;
console.log(stringThree);

// Користувач вказує обсяг флешки в Гб.Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

//     Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// Запитай у користувача тризначне число і виведи його задом наперед.Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5 % річних.Вивести суму нарахованих відсотків.
// Що повернуть вирази:
// 2 && 0 && 3

// 2 || 0 || 3

// 2 && 0 || 3
