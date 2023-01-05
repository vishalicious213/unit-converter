let digits = document.getElementById("digits") // input field
let button = document.getElementById("button")
let startingNumber = document.querySelectorAll(".starting-number") // left-side of equation

digits.value = 0

button.addEventListener("click", () => {
    let m2f = document.getElementById("m2f") // meters to feet
    let l2g = document.getElementById("l2g") // liters to gallons
    startingNumber.forEach(item => item.textContent = digits.value)

    m2f.textContent = Number(digits.value) * 3.281
    l2g.textContent = Number(digits.value) * 0.264
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/