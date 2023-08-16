function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generate3To5NumberCards() {
    let randomNumbersHolder = []
    for (let i = 0; i < generateRandomInt(3,5); i++) {
        let randomNumber = generateRandomInt(0, 100)
        while (randomNumbersHolder.includes(randomNumber)) {
            randomNumber = generateRandomInt(0, 100)
        } 
        randomNumbersHolder[i] = randomNumber
        document.querySelector('.number-cards-container').innerHTML += `<div class="number-card"><p>${randomNumber}</p></div>`
    }
}

generate3To5NumberCards()