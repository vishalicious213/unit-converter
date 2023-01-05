let digits = document.getElementById("digits") // input field
let button = document.getElementById("button")
let startingNumber = document.querySelectorAll(".starting-number") // left-side of equation

button.addEventListener("click", () => {
    startingNumber.forEach(item => item.textContent = digits.value)
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/