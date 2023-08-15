let timer = function(i) {
    document.querySelector('#timer').textContent = i + ' seconds remaining'
    let timeLeft = setTimeout(() => {timer(--i)}, 1000)
    if (i === 0) {
        clearTimeout(timeLeft)
        alert('timer done')
    }
}
document.querySelector('#button').addEventListener('click', () =>{
    timer(30)
}) 



