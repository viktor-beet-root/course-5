const arr = [100, 32, 1, 25, 3, 5, 585,];
const arr1 = Array(100);

arr[1] = 10;

//console.log(arr[1], arr1);

//console.log(arr.length, arr[arr.length - 1]);

//arr.length = 10;
// arr.length = 0;

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] = i + 1);
// }

// for (const value of arr) {
//     console.log(value);
// }
// for (let key in arr) {
//     console.log(arr[key]);
// }

//console.log(arr.push(55, 1, 5, 90), arr.length);
//const test = arr.pop();

//arr.shift();
//console.log(arr.unshift(123), arr.length);

//console.dir(arr);

const d = [1, 2, 1, 87, 54, 14, 1, 54, 15, 5, 1, 58, 1, 45, 8, 4, 56, 88, 2];

// const newArr = [];
// const tmpArr = [];

// for (const value of d) {
//     if (!tmpArr[value]) {
//         newArr.push(value);
//         tmpArr[value] = true;
//     }
// }

// console.log(tmpArr);
const copyArr = d.slice() //d.concat() //[...d];
//copyArr[0] = 1111;
// console.log(copyArr, d);

// console.log(d.includes(54));
// console.log(d.indexOf(54, 5));

/**
 * 
 * @param {Array | String} data 
 * @param {Number | String} findData 
 * @returns {Array}
 */
function getIndexsOf(data = [], findData) {
    const findIndex = [];

    let index = data.indexOf(findData);

    while (index !== -1) {
        findIndex.push(index);

        index = data.indexOf(findData, index + 1);
    }

    return findIndex;
}

//console.log(getIndexsOf(d, 1));

//d.splice(0, 0, 333333);
// console.log(d.splice(5, 5, 3333));
// console.log(d);

function spliceIndexofArray(
    data = [], indexArray = [], replaseArray = [], isMutation = false
) {
    if (isMutation) data = [...data];

    const deafaultReplase = 0;
    let i = 0;

    for (const value of indexArray) {
        data.splice(value, 1, replaseArray[i] ?? deafaultReplase);
        i++;
    }

    console.log(replaseArray.slice(i), indexArray.at(-1), indexArray);

    if (isMutation) return data;
}

console.log(spliceIndexofArray(d, getIndexsOf(d, 1), [22, 22, 22, 22, 22, 22, 22], true));
console.log(d);

const number = [1, 2, 3, 4, 5];

//const [first, second, , , , ssss = 5555] = number;
const [first, second, ...other] = number;
// const first = number[0];
// const second = number[1];
// const other = number.slice(2);

console.log(first, second, other); 
