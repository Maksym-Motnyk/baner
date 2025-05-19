const wrap = document.querySelector(".banner-container");
const button = document.querySelector(".close-btn");

button.addEventListener("click", () => {
  wrap.classList.add("hide");
});

// const messages = ["BUY NOW", "SUPER SALE", "NEW ARRIVAL", "BEST SELLER"];
// let index = 0;
// const bannerText = document.querySelector(".banner-wrap");

// function cycleText() {
//   bannerText.classList.remove("show");
//   setTimeout(() => {
//     bannerText.textContent = messages[index];
//     bannerText.classList.add("show");
//     index = (index + 1) % messages.length;
//   }, 500);
// }

// setInterval(cycleText, 3000);
// bannerText.classList.add("show"); // initial
