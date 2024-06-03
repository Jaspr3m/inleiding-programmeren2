console.log("Page loaded!")

// Interactie ----------
// Pizza interactie methodes
const thinCrustKnop = document.querySelector("button#thin-crust-button")
const thickCrustKnop = document.querySelector("button#thick-crust-button")
const marinaraKnop = document.querySelector("button#marinara-button")
const chocolateKnop = document.querySelector("button#chocolate-button")
const pepperoniKnop = document.querySelector("button#pepperoni-button")
const pineappleKnop = document.querySelector("button#pineapple-button")

// Healthbar interactie methodes
const addHealthKnop = document.querySelector("button#addHealth")
const removeHealthKnop = document.querySelector("button#removeHealth")

// Naamgeving interactie methodes
const bevestigNaamKnop = document.querySelector("button#bevestigNaam")

// IMG ----------------
// Img's die van de overview moeten veranderen
let crustImg = document.getElementById("crust-img")
let sauceImg = document.getElementById("sauce-img")
let toppingImg = document.getElementById("topping-img")

// FUNCTIONS ----------
// Function die ervoor zorgt dat de thick crust naar thin verandert
function selecteerThinCrust() {
    crustImg.src = "img/thin-crust.png";
}

function selecteerThickCrust() {
    crustImg.src = "img/thick-crust.png";
}

function selecteerMarinara() {
    sauceImg.src = "img/marinara.png";
}

function selecteerChocolate() {
    sauceImg.src = "img/chocolate.png";
}

function selecteerPepperoni() {
    toppingImg.src = "img/pepperoni.png";
}

// Function vanuit eigen onderzoek
function selecteerPineapple() {
    toppingImg.src = "img/pineapple.png";
    let audio = document.querySelector("audio")
    audio.play();
}

// NAAMGEVING
// Via inputveld, verander naam van de pizza en weergeef in H2
let naam = "Pizza"
let h2 = document.querySelector("h2")

function veranderNaam() {
    naam = document.getElementById("naamPizza").value
    console.log(naam)
}

// PIZZA HEALTHBAR
// Variabelen aanmaken
let health = 100
let progressBar = document.querySelector("#progressBar")
let lifeIndicator = document.querySelector("h2")
let healthAdded = document.querySelector("h3")

function healthDrain() {
    // health gaat met -1 elke 100ms ervan af
    if (health < 100 && health > 1) {
        health = health - 1
        progressBar.value = health
        lifeIndicator.innerHTML = naam.toUpperCase() + " LEEFT!!!"

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
        lifeIndicator.innerHTML = naam.toUpperCase() + " IS DOOD GEGAAN!! HOE KON JE!?!?! "
        crustImg.classList.add("disable")
        sauceImg.classList.add("disable")
        toppingImg.classList.add("disable")
    }
}
// voer function healthDrain() elke 300 ms uit
setInterval(healthDrain, 300)

// als health onder 100 is (altijd), voeg [nummer tussen 1-4] health toe
function addHealth() {
    if (health < 100) {
        random = Math.floor(1 + Math.random()*3) 
        health = health + random
        progressBar.value = health
        healthAdded.innerHTML = random + "+ health"
    }
}

// als health onder 100 is (altijd), haal [nummer tussen 1-10] health eraf
function removeHealth() {
    if (health < 100) {
        random = Math.ceil(1 + Math.random()*9)
        health = health - random
        progressBar.value = health
        healthAdded.innerHTML = random + "- health"
    }
}

// EVENT LISTENERS ---------------
// Pizza knoppen event listeners
thinCrustKnop.addEventListener("click", selecteerThinCrust)
thickCrustKnop.addEventListener("click", selecteerThickCrust)
marinaraKnop.addEventListener("click", selecteerMarinara)
chocolateKnop.addEventListener("click", selecteerChocolate)
pepperoniKnop.addEventListener("click", selecteerPepperoni)
pineappleKnop.addEventListener("click", selecteerPineapple)

// Progress bar event listener
addHealthKnop.addEventListener("click", addHealth)
removeHealthKnop.addEventListener("click", removeHealth)
bevestigNaamKnop.addEventListener("click", veranderNaam)
// Progress bar


