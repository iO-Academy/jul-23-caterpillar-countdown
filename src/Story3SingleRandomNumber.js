// let randomNumber = Math.floor(Math.random() * 101)
// document.querySelector('.singleRandomNumber').textContent = randomNumber
const numberArray = [];
for (i = 0; i <= 100; i++) {
    numberArray.push(i)  
}

const firstRandomNumber = Math.floor(Math.random() * 101)
const secondRandomNumber = Math.floor(Math.random() * 101)
const thirdRandomNumber = Math.floor(Math.random() * 101)
const fourthdRandomNumber = Math.floor(Math.random() * 101)
const fifthRandomNumber = Math.floor(Math.random() * 101)
document.querySelector('.firstRandomNumber').textContent = firstRandomNumber
document.querySelector('.secondRandomNumber').textContent = secondRandomNumber
document.querySelector('.thirdRandomNumber').textContent = thirdRandomNumber
document.querySelector('.fourthRandomNumber').textContent = fourthdRandomNumber
document.querySelector('.fifthRandomNumber').textContent = fifthRandomNumber

console.log(threeToFiveRandomNumbers)

function getMulpileRamdom(numberArray) {
    const shuffled = [numberArray].sort(() => 0.5 - Math.random())
    return shuffled.slice()
}
console.log(Math.random())