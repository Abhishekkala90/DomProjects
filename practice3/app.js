//Dom Manipulation

//Traverse the Dom

// Parent Node Traversal

// let ul = document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(ul.parentNode.parentElement.parentElement); //   for grandparent

// let html = document.querySelector("html");
// console.log(html.parentNode);
// console.log(html.parentElement);
// difference is  nodes can be text line or simple break or anything but element are top of the node

// Child Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// //child nodes gives you everything
// //but children only give you tags
// console.log(ul.children);
// console.log(ul.children[4]);

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// ul.firstElementChild.style.color = "red";
// ul.childNodes[3].style.color = "violet";

// ul.firstChild.style.color = "red"; cannot because it is text

//Sibling Node Traversal
let ul = document.querySelector("ul");
let div = document.querySelector("div");
console.log(div.childNodes);
console.log(div.children);
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
