//МІНІМУМ

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії)
const autoProfile = {
    manufacturer: 'Audi',
    model: 'A5',
    year: 2014,
    averageSpeed: 150,
    fuelTankCapacity: 50,
    averageFuelConsumptionPer100Km: 8,
    drivers: 'Ivan, Michel',

}
//1. Метод, який виводить на екран інформацію про автомобіль.
function getAutoProfileInfo() {
    return 'Виробник: ' + autoProfile.manufacturer + ' \n' + 'Модель: ' + autoProfile.model + '\n' + 'Рік випуску: ' + autoProfile.year + '\n' +
     'Середня швидкість: ' + autoProfile.averageSpeed + ' км/год' + '\n' + 'Обсяг паливного баку: ' + autoProfile.fuelTankCapacity + ' літрів' + '\n' + 
     'Середня витрата палива на 100 км: ' + autoProfile.averageFuelConsumptionPer100Km + ' літрів' +  '\n' + 'Водії: ' + autoProfile.drivers
}

console.log(getAutoProfileInfo());

// 2. Додавання ім’я водія у список

autoProfile.drivers = autoProfile.drivers + ', Max';
console.log(autoProfile)

// 3. Перевірка водія на наявність його ім’я у списку
const inList = ' is in the list';
const  notList = 'not in the list';
let driverSearch = 'Ivan';

if (autoProfile.drivers.includes([driverSearch])) {
    console.log(driverSearch + inList);
} else {
    console.log(notList + notList);
}

// 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 


function getTimeAndFuel(distance) {
    const breakDriver = 1;
    const fullTravelTime = (distance / autoProfile.averageSpeed).toFixed(1);
    const qtyFuel = (distance / 100) *  autoProfile.averageFuelConsumptionPer100Km;
   
    if (fullTravelTime >= 4) {
        return fullTravelTime + breakDriver + ' hours, ' + qtyFuel + ' liters';
    } else {
        return fullTravelTime + ' hours, ' + qtyFuel + ' liters';
    }

}
console.log((getTimeAndFuel(30)));

//НОРМА
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
const timeDescription = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    setTime: function(hours, minutes, seconds) {
        if (hours > 0 && minutes > 0 && seconds > 0) {
            this.addHours(hours);
            this.addMinutes(minutes);
            this.addSeconds(seconds);
        }
    },
    addHours: function (hours) {
        if(hours < 0) return;

        this.hours = this.hours + hours;

        if(this.hours >= 24) {
            this.hours = this.hours % 24;
        }
    },
    addMinutes: function (minutes) {
        if(minutes < 0) return;

        this.minutes = this.minutes + minutes;

        while(this.minutes >= 60) {
            this.minutes = this.minutes - 60;
            this.addHours(1);
        }
    },
    addSeconds: function (seconds) {
        if(seconds < 0) return;

        this.seconds = this.seconds + seconds;

        while(this.seconds >= 60) {
            this.seconds = this.seconds - 60;
            this.addMinutes(1);
        }
    },
    showTime: function() {
        console.log(this.hours + ' год. ' + this.minutes + ' хв. ' + this.seconds + ' c.');
    }
}

timeDescription.setTime(10, 20, 30);
timeDescription.showTime();


// Зміни часу на передану кількість секунд.
timeDescription.addSeconds(130);
timeDescription.showTime();

// Зміни часу на передану кількість хвилин.
timeDescription.addMinutes(130);
timeDescription.showTime();

// Зміни часу на передану кількість годин.
timeDescription.addHours(5);
timeDescription.showTime();
