import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { ButtonArray, ProductArray } from "./array";
import { Card } from "./card";
import { Button } from "./button";
import {
  DisplayAll,
  FilteredButtonAF,
  FilteredButtonAN,
  FilteredButtonAS,
  FilteredButtonAU,
  FilteredButtonEU,
  FilteredButtonNA,
  FilteredButtonSA,
} from "./filter";
/* import { FilteredButtonNA, FilteredButtonAN } from "./filter"; */

AOS.init();

Button.ButtonCreation(ButtonArray);

Card.CreatingCard(ProductArray, DOM);

DisplayAll.FilterAll(Card.CreatingCard, ProductArray, DOM);

// If possible, combined these
FilteredButtonAF.secondElement(ProductArray, DOM, Card);
FilteredButtonAN.secondElement(ProductArray, DOM, Card);
FilteredButtonAS.secondElement(ProductArray, DOM, Card);
FilteredButtonAU.secondElement(ProductArray, DOM, Card);
FilteredButtonEU.secondElement(ProductArray, DOM, Card);
FilteredButtonNA.secondElement(ProductArray, DOM, Card);
FilteredButtonSA.secondElement(ProductArray, DOM, Card);
