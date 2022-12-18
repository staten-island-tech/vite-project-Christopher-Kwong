import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { ProductArray } from "./array";
import { CreatingCard } from "./card";
import { Button } from "./button";

AOS.init();

ProductArray.forEach((card) => CreatingCard(card));

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
  filtered.forEach((CardInfo) => CreatingCard(CardInfo));
}

FilterNA();
/* 
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { ProductArray } from "./array";
import { Card } from "./card";
import { Button } from "./button";

AOS.init();

Card.Creation(ProductArray);

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
  filtered.forEach((element) => NewCreating(element));
}

FilterNA(); */
