const cards = document.querySelectorAll(".number-card")
let randomNumbersHolderSequential = randomNumbersHolder.sort((function(a, b){return a-b}))
cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == Math.min(...randomNumbersHolderSequential)) {
      e.target.style.backgroundColor = "#686868"
      randomNumbersHolderSequential.shift(randomNumbersHolderSequential)
      if (randomNumbersHolderSequential.length === 0) 
      {
          count= 0
          document.querySelector('.score').textContent += ' ' + ++count
      }
     }
  })
})