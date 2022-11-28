// Basics

// 1
console.log(document.getElementById("content").tagName);

// 2

let second2 = document.querySelector(".basic");

console.log(second2.tagName);

// 3
let third = document.querySelector("li");
console.log(third.textContent);

// 4
let fourth = document.querySelector("li:last-child");
console.log(fourth.textContent);

// Collections

// 1
let bodyDesc = document.querySelectorAll("body *");

for( elem of bodyDesc){
    console.log(elem.nodeName);
}

// 2
let pElems = document.querySelectorAll("article p")
for(elem of pElems){
    console.log(elem.textContent)
}

// 3
let liElems = document.querySelectorAll("li")
for(elem of liElems){
    elem.textContent = "John Doe"
}

// 4
let collections4 = document.querySelectorAll("#content *");
for(elem of collections4){
    if(elem.textContent.length > 10){
        console.log(elem.nodeName)
    }
}