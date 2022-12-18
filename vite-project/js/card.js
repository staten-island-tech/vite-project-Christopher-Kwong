/* import { DOM } from "./dom";

const Card = {
  Creation: function (ArrayInput) {
    ArrayInput.forEach((element) =>
      DOM.CardBox.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
    <h2>${element.Name}</h2>
    <img src="${element.Image}">
    <p>${element.Continent.join(", ")}</p>
    <a href="${element.Link}">Learn More</a>
    <p>${element.Price}</p>
    </div>`
      )
    );
  },
};

export { Card }; */
import { DOM } from "./dom";

function CreatingCard(CardInfo) {
  DOM.CardBox.insertAdjacentHTML(
    "beforeend",
    `<div class="Card">
  <h2>${CardInfo.Name}</h2>
  <img src="${CardInfo.Image}">
  <p>${CardInfo.Continent.join(", ")}</p>
  <a href="${CardInfo.Link}">Learn More</a>
  <p>${CardInfo.Price} ${CardInfo.Currency} / kg</p>
  </div>`
  );
}

export { CreatingCard };
