//Event Propagation

window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.log("div2");
  },
  { once: true }
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("div1");
  },
  false
);

document.querySelector(".button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log((e.target.innerText = "clicked!"));
  },
  false
);

//Target
//Event Bubbling
