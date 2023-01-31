//DOM Manipulation

//Ways

//getElementById
const heading = document.getElementById("main-heading");
console.log(heading);

//getElementsByClassName

// const items = document.getElementsByClassName("list-items");
// console.log(items);

//getElementByTagName
const items = document.getElementsByTagName("li");
console.log(items);

//querySelector

const container = document.querySelector("div");
//if the element have several same name it only selects the first one.

console.log(container);

//querySelectorAll
const containers = document.querySelectorAll("div");
console.log(containers);
//it will give all the elements having the same name
