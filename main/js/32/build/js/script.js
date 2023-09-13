/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
function foo(event) {
  console.log(event.target, event.currentTarget);
  // if (event.target === event.currentTarget) {
  //     //alert(111);
  // }
}

var nav = document.getElementById('menu');
nav.addEventListener('click', foo, true);
var menuSpan = document.querySelector('.menu__link span');
menuSpan.addEventListener('click', foo);

//console.log(menuSpan);
/******/ })()
;
//# sourceMappingURL=script.js.map