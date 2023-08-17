const cards = document.querySelectorAll(".number-card")
let randomNumbersInSequence = randomNumbersHolder.sort(((a, b) => a-b))
let correctNumbersHolder = []

function removeAllCards() {
  document.querySelector('.number-cards-container').innerHTML = ""
}

function removeMinimumNumber() {
  correctNumbersHolder.push(randomNumbersInSequence.shift(randomNumbersInSequence))
}

function resetNumbersInSequence() {
  randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
  correctNumbersHolder = [] 
}

cards.forEach(card => {
  card.addEventListener("click", e => {
    if (e.target.textContent == (randomNumbersInSequence[0])) {
      e.target.classList.add('highlighted-number-card')
      removeMinimumNumber() 
      if (randomNumbersInSequence.length == 0) {
        removeAllCards()
      }   
    } else {
        resetNumbersInSequence()
        cards.forEach(card => {
          card.classList.remove('highlighted-number-card')
        })
      }    
  })
})
  
      
      
