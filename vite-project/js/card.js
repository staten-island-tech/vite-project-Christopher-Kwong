import { DOM } from "./dom";
import { Array } from "./array";

const Card = {
  Creation: function () {
    Array.forEach((element) =>
      DOM.CardBox.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
        <h2>${element.Name}</h2>
        <img src="${element.Image}">
        <p>${element.Continent}</p>
        <a href="${element.Link}">Learn More</a>
        <p>${element.Price}</p>
        </div>`
      )
    );
  },
};

export { Card };
