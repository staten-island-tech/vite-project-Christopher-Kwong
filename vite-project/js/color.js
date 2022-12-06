document.querySelector(".colorbutton").addEventListener("click", function () {
  if (document.body.classList.contains("color1")) {
    document.body.classList.add("color2");
    document.body.classList.remove("color1");
  } else {
    document.body.classList.add("color1");
    document.body.classList.remove("color2");
  }
});

export { colors };
