import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { ButtonArray, ProductArray } from "./array";
import { Card } from "./card";
import { Button } from "./button";
import { FilteredButton } from "./filter";

AOS.init();

Button.ButtonCreation(ButtonArray);

Card.CreatingCard(ProductArray, DOM);

FilteredButton.secondElement(ProductArray, DOM, Card);

/* 
function FilterNA() {
  let filtered = ProductArray.filter((element) =>
    element.Continent.includes("NA")
  );
  DOM.CardBox.innerHTML = "";
  Card.CreatingCard(filtered);
}

document
  .getElementById("filterbutton-NA")
  .addEventListener("click", function () {
    FilterNA();
  });
 */
