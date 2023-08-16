const cards = document.querySelectorAll(".number-card");

cards.forEach(function (card) {
  card.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#686868";
    console.log(e.target);
  });
});
