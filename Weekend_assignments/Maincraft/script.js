
// const start = document.querySelector(".start");
// console.log(start);
const startSelfDelete = () => {
    let start = document.querySelector(".start");
    start.remove();
};
const startBtn = document.querySelector(".start-btn");
console.log(startBtn);
startBtn.addEventListener("click", startSelfDelete);

