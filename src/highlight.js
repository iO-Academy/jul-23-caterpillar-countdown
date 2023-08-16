const cards = document.querySelectorAll(".number-card");

const numbers = [4, 76, 23, 98];

cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#686868";
    console.log(e.target);
  });
});
