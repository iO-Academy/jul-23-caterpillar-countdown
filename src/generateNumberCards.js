function generateRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generate3To5NumberCards(){
let randomNumbersHolder = {}
    for (let i = 0; i < generateRandomInt(5,3); i++) {
        let randomNumber = generateRandomInt(100, 0)
        while (Object.values(randomNumbersHolder).includes(randomNumber)) {
            randomNumber = generateRandomInt(100, 0)
        } 
        randomNumbersHolder[i] = randomNumber
    }

Object.values(randomNumbersHolder).forEach(number => {
    let content = document.querySelector('.number-cards-container').innerHTML
    content +=  
        `<div class="number-card">
            <p>${number}</p>
        </div>`
    document.querySelector('.number-cards-container').innerHTML = content
})
}

generate3To5NumberCards()