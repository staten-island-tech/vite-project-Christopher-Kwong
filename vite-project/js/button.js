const Button = {
  Insert: function (Where, What) {
    Where.insertAdjacentHTML("beforeend", What);
  },
  ButtonCreate: function (Abbreviation, Name) {
    return `<button id="filterbutton-${Abbreviation}" class="filterbutton">${Name}</button>`;
  },
};

export { Button };
