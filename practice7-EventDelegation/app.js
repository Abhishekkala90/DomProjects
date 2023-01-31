//Dom Manipulation

//Event Delegation

//It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector.

// document.querySelector(".football").addEventListener("click", function (e) {
//   console.log("football is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightGrey";
//   }
// });
// document.querySelector(".basketball").addEventListener("click", function (e) {
//   console.log("basketball is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightGrey";
//   }
// });
// document.querySelector(".boxing").addEventListener("click", function (e) {
//   console.log("boxing is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightGrey";
//   }
// });
// document.querySelector(".tennis").addEventListener("click", function (e) {
//   console.log("tennis is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightGrey";
//   }
// });
// document.querySelector(".golf").addEventListener("click", function (e) {
//   console.log("golf is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightGrey";
//   }
// });
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");
  e.target.style.backgroundColor = "grey";
});
const sports = document.querySelector("#sports");
const newsports = document.createElement("li");
newsports.innerText = "Rugby";
newsports.setAttribute("id", "rugby");
sports.appendChild(newsports);
