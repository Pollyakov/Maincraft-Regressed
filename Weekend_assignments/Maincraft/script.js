'use strict';

//VARIABLES:
const body = document.querySelector('body');
const nTiles = 20;

//START PAGE
const startSelfDelete = () => {
    let start = document.querySelector(".start");
    start.remove();
};
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startSelfDelete);

//PLAYFIELD
const playField = document.querySelector('#playField');
const dx = (playField.clientWidth-12)/nTiles;

//TOOLSBAR
const axe = document.querySelector('.axe');
const shovel = document.querySelector('.shovel');
const pickaxe = document.querySelector('.pickaxe');
const inventoryTile = document.querySelector('#inventoryTile');
let inventoryTileClicked = false;


