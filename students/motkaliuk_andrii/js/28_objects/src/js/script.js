const obj = {
    userName: "Andrii",
    age: 26,
    skillList: [],
    skillList: {},
    'random skill': 'skill',
}
// console.log(obj.age, obj.userName, obj["random skill"])

const userAndrii = {
    firstName: 'Andrii',
    lastName: 'Motkaliuk',
    age: 26,
    location: 'IF',
    skillList: 'HTML, SCSS, JS, Gulp, React',
};

userAndrii.age = 27;
userAndrii.age = userAndrii.age + 1;

// console.log(userAndrii.firstName, userAndrii.lastName, userAndrii.age,
// userAndrii.skillList)

const key = 'age';
// console.log(userAndrii[key]);

userAndrii.skillList = userAndrii.skillList + ', Figma';
// console.log(userAndrii.skillList)

userAndrii.hobby = 'tenis';

// for (let key in userAndrii) {
//     console.log(key);
// }
// for (let key in userAndrii) {
//     console.log(key, userAndrii[key]);
// }

// const objCopy = obj;
// objCopy.age = 120;

// const objCopy = Object.assign({}, obj, { age: 300 });
// objCopy.age = 120

// const objCopy = {
//     ...obj,
//     skillList: {
//         ...obj.skillList
//     }
// };

const objCopy = JSON.parse(JSON.stringify(obj));

objCopy.age = 50;
objCopy.skillList.css = 60
// console.log(obj, objCopy);


function copyObj(obj) {
    const newObj = {};
    for (let key in obj) {
        // if (typeof obj[key] === 'object') {
        //     newObj[key] = copyObj(obj[key]);
        // } else {
        //     newObj[key] = obj[key];
        // }

        if (obj.hasOwnProperty(key))
            newObj[key] = (typeof obj[key] === 'object') ? copyObj(obj[key]) : obj[key];
    }
    return newObj;
}


// console.log(objCopy.age);
const aaa = copyObj(objCopy);

delete aaa.age;
// console.log(aaa.age);

const newUser = {
    user: 'Alina',
    age: 28,
    skillList: 'HTML, CSS',
    // getAge: function () {
    //     return this.age;
    // },
    // setAge: function (age) {
    //     if (
    //         (!age && age !== 0) || typeof age !== 'number' || age < 0
    //     ) return;
    //     this.age = age;
    // },


    // getAge() {
    //     return this.age;
    // },
    // setAge(age) {
    //     if (
    //         (!age && age !== 0) || typeof age !== 'number' || age < 0
    //     ) return;

    //     this.age = age;
    // },

    // getAge, setAge


};


function getAge() {
    return this.age;
}

function setAge(age) {
    if (
        (!age && age !== 0) || typeof age !== 'number' || age < 0
    ) return;

    this.age = age;
}

// newUser.setAge(10);

setAge.apply(newUser, [12]);
setAge.call(newUser, 14)
console.log(newUser.age);


function createUser({ userName, age }) {
    function getAge() {
        return this.age;
    }

    function setAge(age) {
        if (
            (!age && age !== 0) || typeof age !== 'number' || age < 0
        ) return;

        this.age = age;
    }

    return {
        userName,
        age,
        getAge,
        setAge,
    }
}

const vasya = createUser({
    userName: 'Vasya',
    age: 30,
});

const petro = createUser({
    userName: 'Petro',
    age: 26,
});

vasya.setAge(35);
petro.setAge(35);


const { userName: userPetro, age = 50 } = petro;
console.log(userPetro, age);
