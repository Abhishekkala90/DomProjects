//DOM Manipulation

//Events  Listeners

//element .addEventListener("click,function);

const buttonTwo = document.querySelector("#btn-2");

function alertBtn() {
  alert("I Love Programming");
}

buttonTwo.addEventListener("click", alertBtn);

//Mouseover Event
const newBackgroundColor = document.querySelector(".box3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "green";
}
newBackgroundColor.addEventListener("mouseover", changeBgColor);
