const timer = timeLeft => {
    document.querySelector('#timer').textContent = timeLeft + ' seconds remaining'
    const countdown = setTimeout(() => {timer(--timeLeft)}, 1000)
    if (timeLeft === 0) {
        clearTimeout(countdown)
        alert('timer done')
    }
}

document.querySelector('#button').addEventListener('click', () => {
    timer(30)
})



