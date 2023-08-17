const cards = document.querySelectorAll(".number-card")
let randomNumbersInSequence = randomNumbersHolder.sort(((a, b) => a-b))
let correctNumbersHolder = []

function removeCards () {
  document.querySelector('.number-cards-container').innerHTML = ""
}

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == (randomNumbersInSequence[0])) {
      e.target.classList.add('highlighted-number-card')
      correctNumbersHolder.push(randomNumbersInSequence.shift(randomNumbersInSequence)) 
      if (randomNumbersInSequence.length == 0) {
      removeCards()
      }   
    } else {
        randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
        correctNumbersHolder = [] 
        cards.forEach(card => {
          card.classList.remove('highlighted-number-card')
        })
      }    
  })
})
  
      
      
