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

function ButtonCreate(Abbreviation, Name, Second) {
  return `<section class="Button">
  <button id="filterbutton-${Abbreviation}" class="filterbutton">${Name}${Second}</button>
  </section>`;
}

ButtonCreate(AF, Africa);
ButtonCreate(AN, Antartica);
ButtonCreate(AS, Asia);
ButtonCreate(AU, Australia);
ButtonCreate(EU, Europe);
ButtonCreate(NA, North, America);
ButtonCreate(SA, South, America);
