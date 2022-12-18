const FilteredButton = {
  FilterNA: function (Products, aDOM, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("NA")
    );
    aDOM.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, aDOM);
  },
  secondElement: function (Products, aDOM, Card) {
    document
      .getElementById("filterbutton-NA")
      .addEventListener("click", function () {
        FilteredButton.FilterNA(Products, aDOM, Card);
      });
  },
};

export { FilteredButton };
