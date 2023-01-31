// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);
// changes color of a single items

// const list = document.querySelectorAll(".list-items");
// console.log(list);
// // in this case we have to run loop over every item since querySelectorAll return all the items
// list.forEach((item) => {
//   item.style.color = "green";
//   item.style.fontSize = "6rem";
// });

// Creating items

const ul = document.querySelector("ul");
const li = document.createElement("li");

//Adding Elements

ul.append(li);
//Modifying the text
li.innerText = "X-Men";
li.innerText = "Iron-Men";
li.setAttribute("class", "list-items");
li.removeAttribute("class");

const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));

//Modifying Attributes & Classes

// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.classList.add("list-items");
li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));

// how to remove elements
li.remove();
