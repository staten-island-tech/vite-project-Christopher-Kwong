const Card = {
  CreatingCard: function (ArrayInput, aDomElement) {
    ArrayInput.forEach((CardInfo) => {
      aDomElement.insertAdjacentHTML(
        "beforeend",
        `<article class="Card">
      
  <h3>${CardInfo.Name}</h3>
  <figure>
    <img src="${CardInfo.Image}">
    <figcaption>A Picture of ${CardInfo.Name}</figcaption>
  </figure>
    <p>${CardInfo.Continent.join(", ")}</p>
    <footer>
      <a href="${CardInfo.Link}">Learn More</a>
    </footer>
    <p class = "Price">$${CardInfo.Price} / ${CardInfo.Measurement}</p>
  </article>`
      );
    });
  },
};

export { Card };
/* 
const Card = {
  CreatingCard: function (ArrayInput) {
    ArrayInput.forEach((CardInfo) =>
      document.getElementById("CardBox").insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
  <h3>${CardInfo.Name}</h3>
  <img src="${CardInfo.Image}">
  <h4>${CardInfo.Continent.join(", ")}</h4>
  <a href="${CardInfo.Link}">Learn More</a>
  <h4 class = "Price">$${CardInfo.Price} / ${CardInfo.Measurement}</h4>
  </div>`
      )
    );
  },
};

export { Card }; */
