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
    }

randomNumbersHolder.forEach(number => {
    let content = document.querySelector('.number-cards-container').innerHTML
    content +=  
        `<div class="number-card">
            <p>${number}</p>
        </div>`
    document.querySelector('.number-cards-container').innerHTML = content
})
}

generate3To5NumberCards()