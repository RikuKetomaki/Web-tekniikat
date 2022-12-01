getAppliances();

//1 Tee map-funktiolla taulu, joka sisältää hinnat 60% alennuksella.
let prices = [200, 450, 234, 430, 670, 500, 150];


let newPrices = prices.map( p => {
    return p * 0.6;
});

//2 Tee map-funktiolla toinen taulukko, jossa on jokaista 
//3 yli 200e hintaa kohden teksti "kallis" ja lopuissa teksti "halpa"
let kuvaukset = prices.filter(h => h>200 ? "kallis" : "halpa");


document.getElementById("kentta").innerHTML = highPrice
//4 Tee filter-funktiolla taulu, jossa on vain 300:aa halvemmat hinnat.

let lowPrice = prices.filter(h => h<300);

//5 Suodata taulukosta vain ne nimet, joissa on kirjaimia 6 tai enemmän (length)
let names = ["John", "Lisa", "Marco", "Elizabeht", "Gunther", "Eveliina", "Risto-Matti", "Marko", "Eijastiina"];

let longNames = names.filter(l => l.length >= 6 )

document.getElementById("kentta").innerHTML = longNames

function showAppliances(gadgets){
    //6 Funktion parametrina on taulukko, joka sisältää laitteiden nimiä
    //Tulosta nimistä lista tälle sivulle ul-luettelon sisään.


let ul = document.querySelector("ul");

for (gadget of gadgets) {
    let li = document.createElement("li");
    li.textContent = gadget;
    ul.appendChild(li);
}
}
function getAppliances(){
    fetch("https://random-data-api.com/api/v2/appliances?size=100")
        .then(resp => resp.json())
        .then(data => showAppliances(data.map(a => a.equipment)))
}

