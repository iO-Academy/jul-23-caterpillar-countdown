const cards = document.querySelectorAll(".number-card")
let randomNumbersInSequence = randomNumbersHolder.sort((function(a, b){return a-b})) //this is required to sort numbers in asc order
let correctNumbersHolder = [] //this holds the correctly clicked numbers temporarily so round can reset if clicked out of sequence

cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == Math.min(...randomNumbersInSequence)) {
      e.target.style.backgroundColor = "#686868"
      correctNumbersHolder.push(randomNumbersInSequence.shift(randomNumbersInSequence))
      console.log(`number clicked in number card: ${e.target.textContent}`) //leaving this in for assistance with PR
      console.log(`randomNumbersInSequence: ${randomNumbersInSequence}`) //leaving this in for assistance with PR
      console.log(`correctNumbersHolder: ${correctNumbersHolder}`) //leaving this in for assistance with PR
    } else {
      randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
      console.log(`number clicked in number card: ${e.target.textContent}`) //leaving this in for assistance with PR
      console.log(`randomNumbersInSequence: ${randomNumbersInSequence}`) //leaving this in for assistance with PR
      console.log(`correctNumbersHolder: ${correctNumbersHolder}`) //leaving this in for assistance with PR
      correctNumbersHolder = [] 
      cards.forEach(card => {
        card.style.backgroundColor = "#cd853f"
      })
    }
  })
})