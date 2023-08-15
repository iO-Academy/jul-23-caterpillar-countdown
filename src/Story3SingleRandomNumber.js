

function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createMultipleCardsBetween3And5(){
let randomNumbersHolder = {}
    for (let i = 0; i < randomInt(5,3); i++) {
        randomNumbersHolder[i] = randomInt(100, 0)
        // document.querySelector('.cardGenerator').textContent += randomInt(100, 0) + ' '
    }
    console.log(randomNumbersHolder)
    // document.querySelector('.cardGenerator').textContent = randomNumbersHolder
} 
createMultipleCardsBetween3And5()
