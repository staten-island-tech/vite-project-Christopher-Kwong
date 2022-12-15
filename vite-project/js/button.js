const Button = {
  Insert: function (Where, What) {
    Where.insertAdjacentHTML("beforeend", What);
  },
  ButtonCreate: function (Abbreviation, Name, Second) {
    return `<button id="filterbutton-${Abbreviation}" class="filterbutton">${Name}${Second}</button>`;
  },
};

export { Button };
