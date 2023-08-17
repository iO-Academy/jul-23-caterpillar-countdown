const cards = document.querySelectorAll(".number-card")
let randomNumbersInSequence = randomNumbersHolder.sort(((a, b) => {return a-b}))
let correctNumbersHolder = []

function removeCards () {
  document.querySelector('.number-cards-container').innerHTML = ""
}

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == (randomNumbersInSequence[0])) {
      e.target.style.backgroundColor = "#686868"
      correctNumbersHolder.push(randomNumbersInSequence.shift(randomNumbersInSequence)) 
      if (randomNumbersInSequence.length == 0) {
      removeCards()
      }   
    } else {
        randomNumbersInSequence = correctNumbersHolder.concat(randomNumbersInSequence)
        correctNumbersHolder = [] 
        cards.forEach(card => {
          card.style.backgroundColor = "#cd853f"
        })
      }    
  })
})
  
      
      
