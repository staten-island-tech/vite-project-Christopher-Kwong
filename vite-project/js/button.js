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
