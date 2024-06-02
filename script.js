console.log("Page loaded!")

// KNOPPEN ----------
// Knoppen die bestaan
const thinCrustKnop = document.querySelector("button#thin-crust-button")
const thickCrustKnop = document.querySelector("button#thick-crust-button")
const marinaraKnop = document.querySelector("button#marinara-button")
const chocolateKnop = document.querySelector("button#chocolate-button")
const pepperoniKnop = document.querySelector("button#pepperoni-button")
const pineappleKnop = document.querySelector("button#pineapple-button")


// Img's die van de overview moeten veranderen
const crustImg = document.querySelector("img#crust-img")

// FUNCTIONS ----------
// Function die ervoor zorgt dat de thick crust naar thin verandert
function selecteerThinCrust() {
    console.log("selecteerThinCrust()")
    document.getElementById("crust-img").src = "img/thin-crust.png";
}

function selecteerThickCrust() {
    console.log("selecteerThickCrust()")
    document.getElementById("crust-img").src = "img/thick-crust.png";
}

function selecteerMarinara() {
    console.log("selecteerMarinara()")
    document.getElementById("sauce-img").src = "img/marinara.png";
}

function selecteerChocolate() {
    console.log("selecteerChocolate()")
    document.getElementById("sauce-img").src = "img/chocolate.png";
}

function selecteerPepperoni() {
    console.log("selecteerPepperoni()")
    document.getElementById("topping-img").src = "img/pepperoni.png";
}

function selecteerPineapple() {
    console.log("selecteerPineapple()")
    document.getElementById("topping-img").src = "img/pineapple.png";
}

thinCrustKnop.addEventListener("click", selecteerThinCrust)
thickCrustKnop.addEventListener("click", selecteerThickCrust)
marinaraKnop.addEventListener("click", selecteerMarinara)
chocolateKnop.addEventListener("click", selecteerChocolate)
pepperoniKnop.addEventListener("click",  selecteerPepperoni)
pineappleKnop.addEventListener("click", selecteerPineapple)





