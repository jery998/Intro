const log_in_btn = document.querySelector("#log-in-btn");
const join_us_btn = document.querySelector("#join-us-btn");
const container = document.querySelector(".container");

join_us_btn.addEventListener("click", () => {
  container.classList.add("join-us-mode");
});

log_in_btn.addEventListener("click", () => {
  container.classList.remove("join-us-mode");
});
