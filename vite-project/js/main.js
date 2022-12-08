import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOM } from "./dom";
import { Colors } from "./color";
import { Array } from "./array";

AOS.init();

Array.forEach((element) =>
  DOM.Box.insertAdjacentHTML("beforeend", `${element.Name}`)
);
