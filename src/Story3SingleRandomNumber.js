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
    console.log(randomNumbersHolder)
    // console.log(Object.values(randomNumbersHolder).includes(50))
    // document.querySelector('.cardGenerator').textContent = randomNumbersHolder
} 

createMultipleCardsBetween3And5()
