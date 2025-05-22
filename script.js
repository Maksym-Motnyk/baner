const wrap = document.querySelector(".banner-container");
const button = document.querySelector(".close-btn");

button.addEventListener("click", () => {
  wrap.classList.add("hide");
});

