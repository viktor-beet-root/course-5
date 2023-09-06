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
    const timeWithBreaks = time + 1;
    const fuelAmountNeeded = distance * automobileList.averageFuelConsumption / 100;

    console.log(timeWithBreaks + 'hours,', fuelAmountNeeded + 'litres');
};

timeAndFuelAmount(600);

//  Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу, може змінитися і інша.
//Наприклад: якщо до часу «20: 59: 45» додати 30 секунд, то повинно вийти «21:00: 15», а не «20: 59: 75». 
//Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.


//  Максимум

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2 - х об'єктів-дробів.
// Віднімання 2 - х об'єктів-дробів.
// Множення 2 - х об'єктів-дробів.
// Ділення 2 - х об'єктів-дробів.
// Скорочення об'єкта-дробу.
