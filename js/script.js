// let cards = document.querySelectorAll(".card", "h3");
// let h3s = document.querySelectorAll("h3");

// cards.forEach(function (card) {
//   card.addEventListener("click", function () {
//     if (this.classList !== "onclick") {
//       for (let i = 0; i < cards.length; i++) {
//         cards[i].classList.remove("onclick");

//       }
//       this.classList.add("onclick");
//     }
//   });
// });
let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("onclick");
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("onclick");
  });
}
