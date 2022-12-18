function NewCreating(ArrayInfo) {
  DOM.CardBox.insertAdjacentHTML(
    "beforeend",
    `<div class="Card">
<h2>${ArrayInfo.Name}</h2>
<img src="${ArrayInfo.Image}">
<p>${ArrayInfo.Continent.join(", ")}</p>
<a href="${ArrayInfo.Link}">Learn More</a>
<p>${ArrayInfo.Price}</p>
</div>`
  );
}

let test = ProductArray.filter((element) => element.Continent.includes("NA"));
if (test) {
  DOM.CardBox.innerHTML = "";
  test.forEach((element) => NewCreating(element));
} else {
  DOM.CardBox.innerHTML = "Nothing";
}
