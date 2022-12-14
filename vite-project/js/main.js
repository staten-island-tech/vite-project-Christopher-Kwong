/* import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { Array } from "./array";
import { Card } from "./card";

AOS.init();

Card.Creation();
 */

import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Colors } from "./color";
import { Card } from "./card";

AOS.init();

Card.Creation();

import { DOM } from "./dom";

function Insert(Where, What) {
  Where.insertAdjacentHTML("beforeend", What);
}

function ButtonCreate(Abbreviation, Name, Second) {
  return `<button id="filterbutton-${Abbreviation}" class="filterbutton">${Name}${Second}</button>`;
}

Insert(DOM.ButtonBox, ButtonCreate("AN", "Antartica", ""));
Insert(DOM.ButtonBox, ButtonCreate("AF", "Africa", ""));
Insert(DOM.ButtonBox, ButtonCreate("AS", "Asia", ""));
Insert(DOM.ButtonBox, ButtonCreate("AU", "Australia", ""));
Insert(DOM.ButtonBox, ButtonCreate("EU", "Europe", ""));
Insert(DOM.ButtonBox, ButtonCreate("NA", "North", "America"));
Insert(DOM.ButtonBox, ButtonCreate("SA", "South", "America"));
