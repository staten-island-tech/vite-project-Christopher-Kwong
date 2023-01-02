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

const FilteredButtonAF = {
  FilterAF: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("AF")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-AF")
      .addEventListener("click", function () {
        FilteredButtonAF.FilterAF(Products, Where, Card);
      });
  },
};

export { FilteredButtonAF };

const FilteredButtonAN = {
  FilterAN: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("AN")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-AN")
      .addEventListener("click", function () {
        FilteredButtonAN.FilterAN(Products, Where, Card);
      });
  },
};

export { FilteredButtonAN };

const FilteredButtonAS = {
  FilterAS: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("AS")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-AS")
      .addEventListener("click", function () {
        FilteredButtonAS.FilterAS(Products, Where, Card);
      });
  },
};

export { FilteredButtonAS };

const FilteredButtonAU = {
  FilterAU: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("AU")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-AU")
      .addEventListener("click", function () {
        FilteredButtonAU.FilterAU(Products, Where, Card);
      });
  },
};

export { FilteredButtonAU };

const FilteredButtonEU = {
  FilterEU: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("EU")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-EU")
      .addEventListener("click", function () {
        FilteredButtonEU.FilterEU(Products, Where, Card);
      });
  },
};

export { FilteredButtonEU };

const FilteredButtonNA = {
  FilterNA: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("NA")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
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

const FilteredButtonSA = {
  FilterSA: function (Products, Where, Card) {
    let Filtered = Products.filter((element) =>
      element.Continent.includes("SA")
    );
    Where.CardBox.innerHTML = "";
    Card.CreatingCard(Filtered, Where.CardBox);
  },
  secondElement: function (Products, Where, Card) {
    document
      .getElementById("filterbutton-SA")
      .addEventListener("click", function () {
        FilteredButtonSA.FilterSA(Products, Where, Card);
      });
  },
};

export { FilteredButtonSA };
