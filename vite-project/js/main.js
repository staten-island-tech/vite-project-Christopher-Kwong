import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./button";
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
import { Conversion } from "./button";
/* import { FilteredButtonNA, FilteredButtonAN } from "./filter"; */

AOS.init();

Conversion.ConversionCreation();

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

document
  .getElementById("conversionbutton")
  .addEventListener("click", function () {
    let ProductArrayConverted = ProductArray.map((x) => {
      if (x.Measurement === "kg") {
        x.Price = Number.parseFloat(x.Price * 0.45).toFixed(2);
        x.Measurement = "lb";
      } else {
        x.Price = Number.parseFloat((x.Price * 20) / 9).toFixed(2);
        x.Measurement = "kg";
      }
      return x;
    });
    DOM.CardBox.innerHTML = "";
    Card.CreatingCard(ProductArrayConverted, DOM);
  });
