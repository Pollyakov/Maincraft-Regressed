
//VARIABLES:

const body = document.querySelector('body');
const nTiles = 20;



const startSelfDelete = () => {
    let start = document.querySelector(".start");
    start.remove();
};
const startBtn = document.querySelector(".start-btn");
console.log(startBtn);
startBtn.addEventListener("click", startSelfDelete);

