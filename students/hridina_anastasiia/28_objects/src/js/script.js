// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:

const automobile = {
    manufacturer: 'Toyota',
    model: 'RAV4',
    yearOfManufacture: 2018,
    averageSpeed: 120,
    fuelTankCapacity: 60,
    averageFuelConsumption: 6.8,
    drivers: 'Nastya',
};

// Метод, який виводить на екран інформацію про автомобіль.

for (let key in automobile) {
    console.log(automobile[key]);
};

// Додавання ім’я водія у список:

automobile.drivers = automobile.drivers + ', Liliya';
console.log(automobile);

// Перевірка водія на наявність його ім’я у списку.

const automobileList = {
    manufacturer: 'Toyota',
    model: 'RAV4',
    yearOfManufacture: 2018,
    averageSpeed: 120,
    fuelTankCapacity: 60,
    averageFuelConsumption: 6.8,
    driver: 'Nastya',

    findDriver() {
        console.log(this.driver);
        console.log(automobileList.driver);
    }
};

automobileList.findDriver();

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
//Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

function timeAndFuelAmount(distance) {
    const time = distance / automobileList.averageSpeed;
    const timeWithBreaks = (time / 4) * 1;
    const totalTime = time + timeWithBreaks;
    const fuelAmountNeeded = distance * automobileList.averageFuelConsumption / 100;

    console.log(totalTime.toFixed(2) + 'hours,', fuelAmountNeeded.toFixed(2) + 'litres');
};

timeAndFuelAmount(900);

//  Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

const currentTime = {
    hours: new Date(),
    minutes: new Date(),
    seconds: new Date(),
};

console.log(currentTime.hours.getHours());
console.log(currentTime.minutes.getMinutes());
console.log(currentTime.seconds.getSeconds());

// Для виведення часу на екран.

function now(date) {
    date.newDate(date);
    return date;
}

const currentDate = new Date();
console.log(currentDate);

// Зміни часу на передану кількість секунд.

function addSeconds(date, seconds) {
    const dateCopy = new Date(date);
    dateCopy.setSeconds(date.getSeconds() + seconds);
    return dateCopy;
}

const date = new Date();
const newDate = addSeconds(date, 90);

console.log(newDate);

// Зміни часу на передану кількість хвилин.

function addMinutes(date, minutes) {
    const dateCopy = new Date(date);
    dateCopy.setMinutes(date.getMinutes() + minutes);
    return dateCopy;
}

const dateAddMinutes = new Date();
const dateWithAddedMinutes = addMinutes(date, 75);

console.log(dateWithAddedMinutes);

// Зміни часу на передану кількість годин.

function addHours(date, hours) {
    const dateCopy = new Date(date);
    dateCopy.setHours(date.getHours() + hours);
    return dateCopy;
}

const dateAddHours = new Date();
const dateWithAddedHours = addHours(date, 5);

console.log(dateWithAddedHours);

// Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу, може змінитися і інша.
//Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21:00: 15», а не «20: 59: 75». 
//Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

