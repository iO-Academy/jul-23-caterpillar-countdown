function removeAllCards() {
  document.querySelector('.number-cards-container').innerHTML = ""
  correctNumbersHolder = []
}

function removeMinimumNumber() {
  correctNumbersHolder.push(randomNumbersInSequence.shift(randomNumbersInSequence))
}

function resetNumbersInSequence() {
  randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
  correctNumbersHolder = [] 
}

