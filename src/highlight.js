function removeAllCards() {
  document.querySelector('.number-cards-container').innerHTML = ""
  correctNumbersHolder = []
  randomNumbersInSequence = []
  randomNumbersHolder = []
}

function removeMinimumNumber() {
  correctNumbersHolder.push(randomNumbersInSequence.shift())
}

function resetNumbersInSequence() {
  randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
  correctNumbersHolder = [] 
}
