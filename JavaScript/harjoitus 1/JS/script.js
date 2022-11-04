// 1
console.log(document.getElementById("content").tagName)

// 2
let second = document.querySelector("#content")
let second2 = document.querySelector(".basic")

console.log(second.tagName)
console.log(second2.tagName)

// 3
let third = document.querySelector("ul .basic")
console.log(third.textContent)
