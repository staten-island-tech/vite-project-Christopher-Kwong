const Card = {
  CreatingCard: function (ArrayInput, aDOM) {
    ArrayInput.forEach((CardInfo) =>
      aDOM.CardBox.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
  <h2>${CardInfo.Name}</h2>
  <img src="${CardInfo.Image}">
  <p>${CardInfo.Continent.join(", ")}</p>
  <a href="${CardInfo.Link}">Learn More</a>
  <p class = "Price">$${CardInfo.Price} / ${CardInfo.Measurement}</p>
  </div>`
      )
    );
  },
};

export { Card };
