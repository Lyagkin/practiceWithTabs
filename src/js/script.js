"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"), // список табов (кликабельных элементов)
    tabsContent = document.querySelectorAll(".tabcontent"), // список контента
    tabsParent = document.querySelector(".tabheader__items"); // родитель табов для делегирования

  function hideTabContent() {
    // функция которыя скрывает табы, их класс активности и их контент со страницы
    tabsContent.forEach((item) => {
      item.classList.add("hideTabContent");
      item.classList.remove("showTabContent", "fade");

      tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active", "scale");
      });
    });
  }

  function showTabContent(i = 0) {
    // функция которая, принимает как аргумент индекс таба из списка и по нему показывает этот таб, по умолчанию принимает аргумент первого таба
    tabsContent[i].classList.add("showTabContent", "fade");
    tabsContent[i].classList.remove("hideTabContent");

    tabs[i].classList.add("tabheader__item_active", "scale");
  }

  hideTabContent(); // скрываем все табы и классы активности у них
  showTabContent(); // показываем первый таб из списка с классом активности

  tabsParent.addEventListener("click", (e) => {
    // вешаем обработчик события клика на родителя табов, проверяем содержит ли элеменат на который кликаем класс табов, если да перебираем все табы и проверям какой из них равен тому на который кликнули, тогда скрываем все и показываем этот
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (item === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});


