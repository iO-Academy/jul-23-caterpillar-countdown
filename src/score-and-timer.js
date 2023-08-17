count = 0

function add1toScore() {
    count++
    document.querySelector('.score span').textContent = count
}

const timer = timeLeft => {
    document.querySelector('.timer').textContent = 'Time Left: ' + timeLeft + ' seconds'
    const countdown = setTimeout(() => {timer(--timeLeft)}, 1000)
    if (timeLeft === 0) {
        clearTimeout(countdown)
        alert(`Game has ended. Your score is ${count}`)
    }
}
timer(30)