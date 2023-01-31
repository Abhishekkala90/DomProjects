const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
    revealBtn.innerHTML = ` Read More <i class="bi bi-caret-down-square-fill"></i>`;
  } else {
    hiddenContent.classList.add("reveal-btn");
    revealBtn.innerHTML = ` Read Less <i class="bi bi-caret-up-square-fill"></i>`;
  }
}
revealBtn.addEventListener("click", revealContent);
console.log(revealBtn.innerHTML);
