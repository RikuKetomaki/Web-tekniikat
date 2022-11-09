// 1
let div = document.querySelector("#content");

const hr = document.createElement("hr");

div.appendChild(hr);

// 2
const h3 = document.createElement("h3");

const node1 = document.createTextNode("Ketomäki");
h3.appendChild(node1);

div.appendChild(h3);

// 3
let weekdaysList = document.querySelector("#content ul");

const li = document.createElement("li");

const node2 = document.createTextNode("Sunnuntai");
li.appendChild(node2);

weekdaysList.appendChild(li);

// 4
let turha = document.querySelector("ul li:first-child");

turha.remove();