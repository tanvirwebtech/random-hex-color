const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.getElementById("body");
const btn = document.getElementById("btn");
const colorCode = document.getElementById("hex-code");

btn.addEventListener("click", function () {
  let hexColor = "#";
  function randomNum() {
    return Math.floor(Math.random() * hexCodes.length);
  }

  for (i = 0; i < 6; i++) {
    hexColor += hexCodes[randomNum()];
  }

  body.style.backgroundColor = hexColor;
  colorCode.innerHTML = hexColor;
});
