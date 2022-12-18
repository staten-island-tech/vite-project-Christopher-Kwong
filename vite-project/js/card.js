import { DOM } from "./dom";

const Card = {
  CreatingCard: function (ArrayInput) {
    ArrayInput.forEach((CardInfo) =>
      DOM.CardBox.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
  <h2>${CardInfo.Name}</h2>
  <img src="${CardInfo.Image}">
  <p>${CardInfo.Continent.join(", ")}</p>
  <a href="${CardInfo.Link}">Learn More</a>
  <p>${CardInfo.Price} ${CardInfo.Currency} / kg</p>
  </div>`
      )
    );
  },
};

export { Card };
