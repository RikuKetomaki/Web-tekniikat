let person = {
    fname: "Testi",
    lname: "Testinen",
    age: 22
}

console.log( person.fname );

person.age = 23;

let persons = [];
persons.push(person);

console.log(persons[0].age);

for (p of persons) {
    console.log(p.age);
}


// Auto tehtävä
let car1 = {
    plate: "OOP-001",
    speed: 120
}

document.getElementById("kentta").textContent = car1.plate + " " + car1.speed

let car2 = {
    plate: "KDO-262",
    speed: 80
}

document.getElementById("kentta2").textContent = car2.plate + " " + car2.speed

car2.speed = 100

if( car2.plate.includes("KDO")) {
    document.getElementById("kentta3").textContent = "on"
}