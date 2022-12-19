const DisplayAll = {
  FilterAll: function (Products, Array, Where) {
    document
      .getElementById("filterbutton-All")
      .addEventListener("click", function () {
        Where.CardBox.innerHTML = "";
        Products(Array, Where);
      });
  },
};

export { DisplayAll };

const FilteredButtonNA = {
  FilterNA: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("NA")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-NA")
      .addEventListener("click", function () {
        FilteredButtonNA.FilterNA(Products, Where, Card);
      });
  },
};

export { FilteredButtonNA };
