function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createMultipleCardsBetween3And5(){
let randomNumbersHolder = {}
    for (let i = 0; i < randomInt(5,3); i++) {
        let randomNumber = randomInt(100, 0)
        while (Object.values(randomNumbersHolder).includes(randomNumber)) {
            randomNumber = randomInt(100, 0)
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
        console.log(number)
    })
} 
createMultipleCardsBetween3And5()