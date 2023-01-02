import AOS from "aos";
import "aos/dist/aos.css";
import "../css/style.css";
import { Colors } from "./button";
import { ButtonArray, ProductArray } from "./array";
import { Card } from "./card";
import { Button } from "./button";
import {
  DisplayAll,
  FilteredButtonAF,
  FilteredButtonAS,
  FilteredButtonAU,
  FilteredButtonEU,
  FilteredButtonNA,
  FilteredButtonSA,
} from "./filter";
import { ConversionButton } from "./button";
import { DOM } from "./dom";

AOS.init();

Colors.Change(DOM.ColorButton);

Button.ButtonCreation(ButtonArray, DOM.ButtonBox);

Card.CreatingCard(ProductArray, DOM.CardBox);

DisplayAll.FilterAll(Card.CreatingCard, ProductArray, DOM.Card);

// If possible, combined these
FilteredButtonAF.secondElement(ProductArray, DOM, Card);
FilteredButtonAS.secondElement(ProductArray, DOM, Card);
FilteredButtonAU.secondElement(ProductArray, DOM, Card);
FilteredButtonEU.secondElement(ProductArray, DOM, Card);
FilteredButtonNA.secondElement(ProductArray, DOM, Card);
FilteredButtonSA.secondElement(ProductArray, DOM, Card);

ConversionButton.Converting(DOM.ConvertButton, ProductArray, Card, DOM.CardBox);

/* const FilteredButton = {
  Filter: function (Products, Where, Card, Test) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes(Test)
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-AF")
      .addEventListener("click", function () {
        FilteredButton.Filter(Products, Where, Card, Test);
      });
  },
};

FilteredButton.Filter(ProductArray, DOM, Card, "AF");

ButtonArray.forEach((element) => console.log(element.Abbreviation));

ButtonArray.forEach((element) =>
  FilteredButton.Filter(ProductArray, DOM, Card, element.Abbreviation)
); */
