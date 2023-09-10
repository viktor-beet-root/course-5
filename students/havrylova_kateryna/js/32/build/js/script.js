/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
function foo(event) {
  console.log(event.target, event.currentTarget);
  if (event.target === event.currentTarget) {
    alert(111);
  }
}
var nav = document.getElementById('menu');
nav.addEventListener('click', foo, true);
var menuSapn = document.querySelector('.menu__link span');
menuSapn.addEventListener('click', foo);
// console.log(menuSapn)

var car = {
  manufacturer: 'Hyundai ',
  model: 'Kona N line',
  year: '2023',
  averageSpeedInKm: 100,
  fuelCapacityInL: 38,
  fuelConsumptionInL: 5,
  drivers: 'Oleg, Iryna, Alina,'
};
var userDistance = +prompt('Enter your future distance trip');
var averageSpeed = car.averageSpeedInKm;
var fuelConsumption = car.fuelConsumptionInL;

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
  var maxRideHours = 4;
  var hoursWithoutStop = distanceInKm / averageSpeed;
  var rideHours = hoursWithoutStop;
  if (hoursWithoutStop > maxRideHours) {
    for (var i = 4; i < hoursWithoutStop; i = i + 4) {
      rideHours++;
    }
    console.log('You will need ' + rideHours + ' hours for the road');
  } else {
    console.log('You will need ' + rideHours + ' hours for the road');
  }
  return rideHours;
}
var userDistanceTime = distanceTime(userDistance);
function distanceFuelConsumption() {
  return fuelConsumption / 100 * userDistance;
}
var userFuelConsumption = distanceFuelConsumption(userDistance);
console.log(userFuelConsumption);
/******/ })()
;
//# sourceMappingURL=script.js.map