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

//FUNCTIONS
const onTileClick = (event) => {
    let tile = event.target;
    let tileColor = tile.style.backgroundColor;
    let inventoryTileColor = inventoryTile.style.backgroundColor;
    // console.log(tile,tileColor);
    if (inventoryTileClicked) {
      tile.style.backgroundColor = inventoryTileColor;
      inventoryTile.style.backgroundColor = 'black';
      inventoryTileClicked = false;
        // if (tileColor == tileColors[0]) {}
    } else {
      tile.style.backgroundColor = tileColors[0];
      inventoryTile.style.backgroundColor = tileColor;
    }
};

const drawTile = colorIndex => {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    let tileColor = tileColors[colorIndex];
    tile.style.backgroundColor = tileColor;
    tile.style.width = `${dx}px`;
    tile.style.height = `${dx}px`;
    spielFeld.appendChild(tile);
    tile.addEventListener('click',onTileClick);
}

const init = () => {
    raster.forEach((item, ind) => {
       drawTile(item);
    });

 }

 // EVENT-LISTENERS
 inventoryTile.addEventListener('click', event => {
    let inventoryTileColor = inventoryTile.style.backgroundColor;
    if (inventoryTileColor != 'black') inventoryTileClicked = true;
});





