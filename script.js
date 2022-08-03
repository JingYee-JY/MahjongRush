const startButton = document.querySelector(".startGame");
const start = document.querySelector(".start");
const select = document.querySelector(".selection");
const plusButton = document.querySelector(".plusGame");
const minusButton = document.querySelector(".minusGame");
const mixedButton = document.querySelector(".mixedGame");
const plus = document.querySelector(".plus");

console.log(start)
console.log(startButton)
console.log(select)

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    select.classList.remove("hide")
})
plusButton.addEventListener("click", () => {
    select.classList.add("hide")
    plus.classList.remove("hide")
})