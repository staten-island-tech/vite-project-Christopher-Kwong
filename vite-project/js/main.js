import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { ProductArray } from "./array";
import { Card } from "./card";
import { Button } from "./button";

AOS.init();

Card.CreatingCard(ProductArray);

Button.Insert(DOM.ButtonBox, Button.ButtonCreate("AN", "Antartica"));
Button.Insert(DOM.ButtonBox, Button.ButtonCreate("AF", "Africa"));
Button.Insert(DOM.ButtonBox, Button.ButtonCreate("AS", "Asia"));
Button.Insert(DOM.ButtonBox, Button.ButtonCreate("AU", "Australia"));
Button.Insert(DOM.ButtonBox, Button.ButtonCreate("EU", "Europe"));
Button.Insert(DOM.ButtonBox, Button.ButtonCreate("NA", "North America"));
Button.Insert(DOM.ButtonBox, Button.ButtonCreate("SA", "South America"));

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
