const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // Array of 16 hexadecimal number
const body = document.getElementById("body");
const btn = document.getElementById("btn");
const colorCode = document.getElementById("hex-code");

//This Function Will be Called When we click Change Color Button
btn.addEventListener("click", function () {
  let hexColor = "#";

  function randomNum() {
    return Math.floor(Math.random() * hexCodes.length);
  }

  //loop for generating hex color code
  for (i = 0; i < 6; i++) {
    hexColor += hexCodes[randomNum()];
  }
  //loop end

  body.style.backgroundColor = hexColor;
  colorCode.innerHTML = hexColor;
});
