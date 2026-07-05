// const = a variable that can not be changed
const PI = 3.14159;
let radius;
let P;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  P = 2 * PI * radius;
  document.getElementById("myH3").textContent = P + " m";
};
