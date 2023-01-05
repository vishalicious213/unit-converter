let digits = document.getElementById("digits") // input field
let button = document.getElementById("button")
let startingNumber = document.querySelectorAll(".starting-number") // left-side of equation

digits.value = 0

button.addEventListener("click", () => {
    let m2f = document.getElementById("m2f") // meters to feet
    startingNumber.forEach(item => item.textContent = digits.value)
    m2f.textContent = Number(digits.value) * 3.281
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/