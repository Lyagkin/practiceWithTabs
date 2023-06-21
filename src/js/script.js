"use strict";

const Tabs = require("./modules/tabs");

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
