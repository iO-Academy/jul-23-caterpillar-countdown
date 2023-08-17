count = 0
document.querySelector('.score').textContent += ` ${count}`

function add1toScore() {
    document.querySelector('.score').textContent += ' ' + ++count
}