function foo(event) {
    console.log(event.target, event.currentTarget);
    if (event.target === event.currentTarget) {
        alert(111);
    }
}

const nav = document.getElementById('menu');

nav.addEventListener('click', foo, true);

const menuSapn = document.querySelector('.menu__link span');

menuSapn.addEventListener('click', foo);
// console.log(menuSapn)



const car = {
    manufacturer: 'Hyundai ',
    model: 'Kona N line',
    year: '2023',
    averageSpeedInKm: 100,
    fuelCapacityInL: 38,
    fuelConsumptionInL: 5,
    drivers: 'Oleg, Iryna, Alina,'
};
const userDistance = +prompt('Enter your future distance trip');
const averageSpeed = car.averageSpeedInKm;
const fuelConsumption = car.fuelConsumptionInL;

// function distanceTime(distanceInKm) { 
//     const roadWithoutStop = 4; 
//     const maxRideHours = 4; 
//     let rideHours = distanceInKm / averageSpeed; 
//     if (rideHours > maxRideHours) { 
//         for (let i = 1; i < rideHours; i++) { 
//             if (i % 4 == 0) { 
//                 rideHours++; 
//             } 
//         } 
//         console.log('You will need ' + rideHours + ' hours for the road'); 
//     } else { 
//         console.log('You will need ' + rideHours + ' hours for the road'); 
//     } 
//     return rideHours; 
// } 

function distanceTime(distanceInKm) {
    const maxRideHours = 4;
    const hoursWithoutStop = distanceInKm / averageSpeed;
    let rideHours = hoursWithoutStop;
    if (hoursWithoutStop > maxRideHours) {
        for (let i = 4; i < hoursWithoutStop; i = i + 4) {
            rideHours++;
        }
        console.log('You will need ' + rideHours + ' hours for the road');
    } else {
        console.log('You will need ' + rideHours + ' hours for the road');
    }
    return rideHours;
}

const userDistanceTime = distanceTime(userDistance);


function distanceFuelConsumption() {
    return (fuelConsumption / 100 * userDistance);
}
const userFuelConsumption = distanceFuelConsumption(userDistance);
console.log(userFuelConsumption);

