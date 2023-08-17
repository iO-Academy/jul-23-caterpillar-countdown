let randomNumbersInSequence = []
let correctNumbersHolder = []
let randomNumbersHolder = []

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generate3To5NumberCards() {
  for (let i = 0; i < generateRandomInt(3, 5); i++) {
    let randomNumber = generateRandomInt(0, 100)
    while (randomNumbersHolder.includes(randomNumber)) {
      randomNumber = generateRandomInt(0, 100)
    }
    randomNumbersHolder[i] = randomNumber
    document.querySelector(
      ".number-cards-container"
    ).innerHTML += `<div class="number-card">${randomNumber}</div>`
  }
  randomNumbersInSequence = randomNumbersHolder.sort(((a, b) => a-b))
  
  const cards = document.querySelectorAll(".number-card")
  cards.forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.textContent == (randomNumbersInSequence[0])) {
        e.target.classList.add('highlighted-number-card')
        removeMinimumNumber() 
        if (randomNumbersInSequence.length == 0) {
          removeAllCards()
          add1toScore()
          generate3To5NumberCards()
        }   
      } else {
          resetNumbersInSequence()
          cards.forEach(card => {
            card.classList.remove('highlighted-number-card')
          })
        }    
    })
  })
}

generate3To5NumberCards()