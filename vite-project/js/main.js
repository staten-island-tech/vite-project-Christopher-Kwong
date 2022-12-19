import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { ButtonArray, ProductArray } from "./array";
import { Card } from "./card";
import { Button } from "./button";
import { FilteredButtonNA, DisplayAll } from "./filter";
/* import { FilteredButtonNA, FilteredButtonAN } from "./filter"; */

AOS.init();

Button.ButtonCreation(ButtonArray);

Card.CreatingCard(ProductArray, DOM);

DisplayAll.FilterAll(Card.CreatingCard, ProductArray, DOM);

FilteredButtonNA.secondElement(ProductArray, DOM, Card);

let Buttons = "filterbutton-" + ButtonArray.Abbreviation;
console.log(document.getElementById(Buttons));

/* FilteredButtonAN.secondElement(ProductArray, DOM, Card); */
