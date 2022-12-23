import { DOM } from "./dom";

const Button = {
  ButtonCreation: function (Array) {
    Array.forEach((element) =>
      DOM.ButtonBox.insertAdjacentHTML(
        "beforeend",
        `<button id="filterbutton-${element.Abbreviation}" class="filterbutton">${element.Name}</button>`
      )
    );
  },
};

export { Button };

const Colors = [
  document.querySelector(".colorbutton").addEventListener("click", function () {
    if (document.body.classList.contains("color1")) {
      document.body.classList.add("color2");
      document.body.classList.remove("color1");
    } else {
      document.body.classList.add("color1");
      document.body.classList.remove("color2");
    }
  }),
];

export { Colors };

const Conversion = {
  ConversionCreation: function () {
    DOM.ConversionBox.insertAdjacentHTML(
      "beforeend",
      `<button id="conversionbutton">Unit Conversion</button>`
    );
  },
};

export { Conversion };
