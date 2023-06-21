function Tabs(
  tabsSelector,
  contentSelector,
  tabsParentSelector,
  hideClass,
  showClass,
  activeClass,
  fadeClass,
  scaleClass
) {
  window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(tabsSelector), // список табов
      tabsContent = document.querySelectorAll(contentSelector), // список контента
      tabsParent = document.querySelector(tabsParentSelector); // родитель табов

    function hideTabContent() {
      // функция которыя скрывает табы, их класс активности и их контент со страницы
      tabsContent.forEach((item) => {
        item.classList.add(hideClass);
        item.classList.remove(showClass, fadeClass);

        tabs.forEach((item) => {
          item.classList.remove(activeClass, scaleClass);
        });
      });
    }

    function showTabContent(i = 0) {
      // функция которая, принимает как аргумент индекс таба из списка и по нему показывает этот таб, по умолчанию принимает аргумент первого таба
      tabsContent[i].classList.add(showClass, fadeClass);
      tabsContent[i].classList.remove(hideClass);

      tabs[i].classList.add(activeClass, scaleClass);
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
