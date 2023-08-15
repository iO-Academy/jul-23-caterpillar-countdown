/* function startTimer()
{
    document.querySelector('submit').addEventListener('click', () => {
        setTimeout(() => {
            console.log('timer done')
        }, 30000)
    })
} */


let timer = function(x) {
    document.querySelector('#timer').innerHTML = x + ' seconds remaining'
    let timeLeft = setTimeout(() => {timer(--x)}, 1000)
    if (x === 0) {
        clearTimeout(timeLeft)
        alert('timer done')
    }
}
timer(30)