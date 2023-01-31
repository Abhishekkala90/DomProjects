let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modal = document.getElementById("modal-container");

openBtn.addEventListener("click", function (e) {
  modal.style.display = "block";
});
console.log(openBtn);
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
