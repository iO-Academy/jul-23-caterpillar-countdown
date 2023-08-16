const cards = document.querySelectorAll(".number-card")

let randomNumbersHolderSequential = randomNumbersHolder.sort((function(a, b){return a-b}))

cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == Math.min(...randomNumbersHolderSequential)) {
      e.target.style.backgroundColor = "#686868"
      randomNumbersHolderSequential.shift(randomNumbersHolderSequential)
      console.log(e.target.textContent) //leaving this in for assistance with PR
      console.log(randomNumbersHolderSequential) //leaving this in for assistance with PR
    }
  })
})