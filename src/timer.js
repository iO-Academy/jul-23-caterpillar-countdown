const timer = timeLeft => {
    document.querySelector('.timer').textContent = 'Time Left: ' + timeLeft + ' seconds'
    const countdown = setTimeout(() => {timer(--timeLeft)}, 1000)
    if (timeLeft === 0) {
        clearTimeout(countdown)
        alert('timer done')
    }
}
timer(30)



