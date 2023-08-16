const cards = document.querySelectorAll(".number-card")

let randomNumbersHolderSequential = randomNumbersHolder.sort((function(a, b){return a-b}))
let correctNumbersHolder = []
cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    
    if (e.target.textContent == Math.min(...randomNumbersHolderSequential)) {
      e.target.style.backgroundColor = "#686868"
      correctNumbersHolder.push(randomNumbersHolderSequential.shift(randomNumbersHolderSequential))
      console.log(e.target.textContent) //leaving this in for assistance with PR
      console.log(randomNumbersHolderSequential) //leaving this in for assistance with PR
      console.log(correctNumbersHolder)
    } else {
      randomNumbersHolderSequential = correctNumbersHolder.concat(randomNumbersHolderSequential)
      console.log(randomNumbersHolderSequential)
      cards.forEach(card => {
        card.style.backgroundColor = "#cd853f"
      })
    }
  })
})