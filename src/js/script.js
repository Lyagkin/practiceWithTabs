"use strict";

import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "hideTabContent",
    "showTabContent",
    "tabheader__item_active",
    "fade",
    "scale"
  );
});
