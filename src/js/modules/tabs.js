function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  hideCssClass,
  showCssClass,
  activeCssClass,
  fadeCssClass,
  scaleCssClass
) {
  const tabs = document.querySelectorAll(tabsSelector), // список табов
    tabsContent = document.querySelectorAll(tabsContentSelector), // список контента
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
}

export default tabs;
