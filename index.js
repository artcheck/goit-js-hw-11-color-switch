const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorsLength = colors.length - 1;

const startReff = document.querySelector("[data-action='start']");
const stopReff = document.querySelector("[data-action='stop']");
const bodyReff = document.querySelector("body");

let setTimer = null;

startReff.addEventListener("click", () => {
  startReff.setAttribute("disabled", "disabled");
  timerColor = setInterval(() => {
    let randomColor = randomIntegerFromInterval(1, colorsLength);
    bodyReff.style.backgroundColor = colors[randomColor];
  }, 500);
  console.log("started");
});

stopReff.addEventListener("click", () => {
  startReff.removeAttribute("disabled");
  clearInterval(timerColor);
  console.log("stoped");
});
