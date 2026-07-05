// EASY WAY WINDOW PROMPT
let fullName = prompt("Hello there please enter your fullname");
alert("Thank you " + fullName);

// HTML TEXTBOX
let fullname;
document.getElementById("mySubmit").onclick = function () {
  fullname = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = "Hello " + fullname;
};
