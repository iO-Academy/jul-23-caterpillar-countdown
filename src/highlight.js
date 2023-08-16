const cards = document.querySelectorAll(".number-card");

let randomNumbersHolderSequential = randomNumbersHolder.sort((function(a, b){return a-b}))

cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    if (e.target.textContent == Math.min(...randomNumbersHolderSequential))
    e.target.style.backgroundColor = "#686868";
    randomNumbersHolderSequential.shift(randomNumbersHolderSequential)
    console.log(e.target.textContent);
  });
});

// randomNumbersHolderSequential.forEach(numbers => {
//   cards.forEach(function (card) {
//     card.addEventListener("click", (e) => {
//       if (e.target.textContent == number){
//         e.target.style.backgroundColor = "#686868"
//       }
      
//     });
// })


