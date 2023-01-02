const Button = {
  ButtonCreation: function (Array, DOM) {
    Array.forEach((element) =>
      DOM.insertAdjacentHTML(
        "beforeend",
        `<button id="filterbutton-${element.Abbreviation}" class="filterbutton">${element.Name}</button>`
      )
    );
  },
};

export { Button };

const Colors = {
  Change: function (DOM) {
    DOM.addEventListener("click", function () {
      if (document.body.classList.contains("color1")) {
        document.body.classList.add("color2");
        document.body.classList.remove("color1");
      } else {
        document.body.classList.add("color1");
        document.body.classList.remove("color2");
      }
    });
  },
};

export { Colors };

const ConversionButton = {
  Converting: function (aDomElement, What, Create, Where) {
    aDomElement.addEventListener("click", function () {
      let ProductArrayConverted = What.map((element) => {
        if (element.Measurement === "kg") {
          element.Price = Number.parseFloat(element.Price / 2.205).toFixed(2);
          element.Measurement = "lb";
        } else {
          element.Price = Number.parseFloat(element.Price * 2.205).toFixed(2);
          element.Measurement = "kg";
        }
        return element;
      });
      Where.innerHTML = "";
      Create.CreatingCard(ProductArrayConverted, Where);
    });
  },
};

export { ConversionButton };
