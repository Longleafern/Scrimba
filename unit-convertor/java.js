let distanceEl = document.getElementById("distance-conv")
let volumeEl = document.getElementById("volume-conv")
let massEl = document.getElementById("mass-conv")
let inputEl = document.getElementById("input-number")

let num = window.prompt()

function runP(num) {
    distance(num)
    volume(num)
    mass(num)
    inputEl.innerText += `${num}`
}

function distance(input) {
    let sumE = input / 3.28084
    let roundE = sumE.toFixed(3)
    let sumB = input * 3.28084
    let roundB = sumB.toFixed(3)
    distanceEl.innerText += `${input} meters = ${roundE} feet  || ${input} feet = ${roundB} meters `
}

function volume(input) {
    let sumE = input / .264172
    let roundE = sumE.toFixed(3)
    let sumB = input * .264172
    let roundB = sumB.toFixed(3)
    volumeEl.innerText += `${input} liters = ${roundE} gallons || ${input} gallons = ${roundB} liters`
}

function mass(input) {
    let sumE = input * 2.20462262
    let roundE = sumE.toFixed(3)
    let sumB = input / 2.20462262
    let roundB = sumB.toFixed(3)
    massEl.innerText += `${input} kilos = ${roundE} pounds || ${input} pounds = ${roundB} kilos `
}

runP(num)
