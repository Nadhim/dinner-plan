const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay! Call me at 7.15!";
  gif.src =
    "https://media1.tenor.com/m/pJyEFbnrBoUAAAAC/dance-funny.gif";
});

// noBtn.addEventListener("mouseover", () => {
//   const noBtnRect = noBtn.getBoundingClientRect();
//   const maxX = window.innerWidth - noBtnRect.width;
//   const maxY = window.innerHeight - noBtnRect.height;

//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// });

noBtn.addEventListener("click", () => {
  question.innerHTML = "I hate you!";
  gif.src =
    "https://media1.tenor.com/m/VSnf9sNntYUAAAAC/crying-boy-crying.gif";
});