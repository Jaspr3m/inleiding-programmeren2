console.log("Page loaded!")

// KNOPPEN ----------
// Pizza knoppen
const thinCrustKnop = document.querySelector("button#thin-crust-button")
const thickCrustKnop = document.querySelector("button#thick-crust-button")
const marinaraKnop = document.querySelector("button#marinara-button")
const chocolateKnop = document.querySelector("button#chocolate-button")
const pepperoniKnop = document.querySelector("button#pepperoni-button")
const pineappleKnop = document.querySelector("button#pineapple-button")

// Progress bar + knop [TEST]
const addHealthKnop = document.querySelector("button#addHealth")
const removeHealthKnop = document.querySelector("button#removeHealth")

// IMG ----------------
// Img's die van de overview moeten veranderen
let crustImg = document.getElementById("crust-img")
let sauceImg = document.getElementById("sauce-img")
let toppingImg = document.getElementById("topping-img")

// FUNCTIONS ----------
// Function die ervoor zorgt dat de thick crust naar thin verandert
function selecteerThinCrust() {
    console.log("selecteerThinCrust()")
    crustImg.src = "img/thin-crust.png";
}

function selecteerThickCrust() {
    console.log("selecteerThickCrust()")
    crustImg.src = "img/thick-crust.png";
}

function selecteerMarinara() {
    console.log("selecteerMarinara()")
    sauceImg.src = "img/marinara.png";
}

function selecteerChocolate() {
    console.log("selecteerChocolate()")
    sauceImg.src = "img/chocolate.png";
}

function selecteerPepperoni() {
    console.log("selecteerPepperoni()")
    toppingImg.src = "img/pepperoni.png";
}

// Function vanuit eigen onderzoek
function selecteerPineapple() {
    console.log("selecteerPineapple()")
    toppingImg.src = "img/pineapple.png";
    let audio = document.querySelector("audio")
    audio.play();
}

// PIZZA HEALTHBAR
// Variabelen aanmaken
let progressBar = document.querySelector("#progressBar")
let lifeIndicator = document.querySelector("h2#life-indicator")
let health = 100

function healthDrain() {
    // health gaat met -1 elke 100ms ervan af
    if (health < 100 && health > 1) {
        health = health - 1
        progressBar.value = health
        lifeIndicator.innerHTML = "HIJ LEEFT!!!"

        crustImg.classList.add("enable")
        sauceImg.classList.add("enable")
        toppingImg.classList.add("enable")
        
        crustImg.classList.remove("disable")
        sauceImg.classList.remove("disable")
        toppingImg.classList.remove("disable")
        // wanneer het meer dan of gelijk aan 100 is, continu -1 aftrekken
    } else if (health >= 100) {
        health--
        progressBar.value = health
        crustImg.classList.add("enable")
        sauceImg.classList.add("enable")
        toppingImg.classList.add("enable")
        // wanneer health meer dan of gelijk aan 1 is, health blijft gelijk aan 1
    } else if (health <= 1) {
        health = 1
        progressBar.value = health
        lifeIndicator.innerHTML = "HIJ IS DOOD!! REVIVE HEM!!!"
        crustImg.classList.add("disable")
        sauceImg.classList.add("disable")
        toppingImg.classList.add("disable")

        crustImg.classList.remove("enable")
        sauceImg.classList.remove("enable")
        toppingImg.classList.remove("enable")
    } 
}
// voer function healthDrain() elke 300 ms uit
setInterval(healthDrain, 300)

// als health onder 100 is (altijd), voeg 10 health toe
function addHealth() {
    if (health < 100) {
        health = health + 10
        progressBar.value = health
    }
}

// als health onder 100 is (altijd), haal 10 health eraf
function removeHealth() {
    if (health < 100) {
        health = health - 10
        progressBar.value = health
    } 
}

// EVENT LISTENERS ---------------
// Pizza knoppen event listeners
thinCrustKnop.addEventListener("click", selecteerThinCrust)
thickCrustKnop.addEventListener("click", selecteerThickCrust)
marinaraKnop.addEventListener("click", selecteerMarinara)
chocolateKnop.addEventListener("click", selecteerChocolate)
pepperoniKnop.addEventListener("click",  selecteerPepperoni)
pineappleKnop.addEventListener("click", selecteerPineapple)

// Progress bar event listener
addHealthKnop.addEventListener("click", addHealth)
removeHealthKnop.addEventListener("click", removeHealth)

// Progress bar


