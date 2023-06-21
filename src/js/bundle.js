/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

function Tabs(
  tabsSelector,
  contentSelector,
  tabsParentSelector,
  hideCssClass,
  showCssClass,
  activeCssClass,
  fadeCssClass,
  scaleCssClass
) {
  window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(tabsSelector), // список табов
      tabsContent = document.querySelectorAll(contentSelector), // список контента
      tabsParent = document.querySelector(tabsParentSelector); // родитель табов

    function hideTabContent() {
      // функция которыя скрывает табы, их класс активности и их контент со страницы
      tabsContent.forEach((item) => {
        item.classList.add(hideCssClass);
        item.classList.remove(showCssClass, fadeCssClass);

        tabs.forEach((item) => {
          item.classList.remove(activeCssClass, scaleCssClass);
        });
      });
    }

    function showTabContent(i = 0) {
      // функция которая, принимает как аргумент индекс таба из списка и по нему показывает этот таб, по умолчанию принимает аргумент первого таба
      tabsContent[i].classList.add(showCssClass, fadeCssClass);
      tabsContent[i].classList.remove(hideCssClass);

      tabs[i].classList.add(activeCssClass, scaleCssClass);
    }

    hideTabContent(); // скрываем все табы и классы активности у них
    showTabContent(); // показываем первый таб из списка с классом активности

    tabsParent.addEventListener("click", (e) => {
      // вешаем обработчик события клика на родителя табов, проверяем содержит ли элеменат на который кликаем класс табов, если да перебираем все табы и проверям какой из них равен тому на который кликнули, тогда скрываем все и показываем этот
      const target = e.target;

      if (target && target.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((item, i) => {
          if (item === target) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  });
}

module.exports = Tabs;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


const Tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");

Tabs(
  ".tabheader__item",
  ".tabcontent",
  ".tabheader__items",
  "hideTabContent",
  "showTabContent",
  "tabheader__item_active",
  "fade",
  "scale"
);

console.log(".tabheader__item".slice(1));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map