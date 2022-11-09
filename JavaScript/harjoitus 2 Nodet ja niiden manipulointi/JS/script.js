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


// Advanced
// 1
let tiistai = document.querySelector("#content ul li:first-child");

const li2 = document.createElement("li")

const node3 = document.createTextNode("Maanantai");
li2.appendChild(node3);



// 3
let items = document.querySelectorAll("ul:first-child li");

for (item of items) {
    let text = item.textContent;
    item.textContent = "";

    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}

//style
function changeColor() {
    let elems = document.querySelectorAll("ul:first-child li");

    for (elem of elems) {
        elem.classList.toggle("colored");
    }
}

function changeSize() {
    let elements = document.querySelectorAll("li");

    for (const e of elements) {
        if (e.textContent.length < 10) {
            e.classList.add("sizeup");
        }
    }
}