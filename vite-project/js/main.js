import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { Array } from "./array";

AOS.init();

Array.forEach((element) =>
  DOM.Box.insertAdjacentHTML(
    "beforeend",
    `<div class="Card">
    <p>${element.Name}</p>
    <p>${element.Description}</p>
    <img src="${element.Image}">
    <p>${element.Continent}</p>
    <p>${element.Link}</p>
    <p>${element.Price}</p>
    </div>`
  )
);
