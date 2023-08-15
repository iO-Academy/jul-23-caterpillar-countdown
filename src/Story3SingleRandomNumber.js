

function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createMultipleCardsBetween3And5(){
    for (let i = 0; i < randomInt(2,6); i++) {
        document.querySelector('.cardGenerator').textContent += randomInt(0,101) + ' '
    }
} 
createMultipleCardsBetween3And5()

