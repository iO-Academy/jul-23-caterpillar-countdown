function scoreCount() {
count = 0
document.querySelector('.number-cards-container').addEventListener('click', () =>{
    count +=1
    document.querySelector('.score').textContent = 'Score: ' + count
    console.log(count)
})
}
scoreCount()