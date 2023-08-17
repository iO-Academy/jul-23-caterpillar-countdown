const cards = document.querySelectorAll(".number-card")
let randomNumbersInSequence = randomNumbersHolder.sort((function(a, b){return a-b}))
let correctNumbersHolder = []

cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == Math.min(...randomNumbersInSequence)) {
      e.target.style.backgroundColor = "#686868"
      correctNumbersHolder.push(randomNumbersInSequence.shift(randomNumbersInSequence))
    } else {
      randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
      correctNumbersHolder = [] 
      cards.forEach(card => {
        card.style.backgroundColor = "#cd853f"
      })
    }
  })
})