/**
* JavaScript File
* Made By: João Rafael Silva
  GAME JavaScript
  generate the gameboard, gameloop and manages the game cards

  about N and M:
  n -> number of cols from connect4. Rows of the gameMatrix
  m -> number of rows from connect4. Number of elements from each array.
**/
console.log("Game JavaScript File loaded!");
let n = 7;
let m = 6;
function generateGameMatrix(n,m){
  console.log("Initializing game...");
  //Matrix
  let matrix = [];
  //visual elements
  const base = document.getElementById("base");
  const board = document.createElement("div");
  board.setAttribute("id", "board");
  board.ClassName = "board";
  base.appendChild(board);
  console.log("Board base created Successfully");
  for(let count = 0; count < n; count++) {
         //logical matrix
         matrix[count] = [];
         console.log("Logical matrix line "+ count + " created");

         //visual elements creation - cols
         const col = document.createElement("div");
         col.setAttribute("id", count);
         col.setAttribute("onclick", "'Fill(id)'");
         col.className = "col";
         board.appendChild(col);


         //fill the cols with cells
         for(let count2 = 0; count2 < m; count2++){
           //put null on the logical matrix
           matrix[count][count2] = null;
           //visual elements creation - cells
           const cel = document.createElement("div");
           let colN = String(count);
           let celN = String(count2);
           let parseID = colN + celN;
           //id format colrow like c=0,r=2 ... 02
           cel.setAttribute("id", parseID);
           cel.className = "cel";
         }
  }
  console.log("Board Filled Successfully!!!!");
  console.log("Game Matrix Successfully created!");
  return matrix;
}
function defineCustomSize(){
  const value = document.getElementById("size");
  const size = value.value;
  switch (value) {
    case 1:
      n = 6;
      m = 5;
      break;
    case 2:
      n = 5;
      m = 4;
      break;
    case 3:
      n = 7;
      m = 6;
      break;
    default:
  }
}
function Fill(id){
  //TODO
}
function startGame(n,m){
  consyt
  let gameMatrix = generateGameMatrix(n, m);
}
const base = document.getElementById("base");
const preStart = document.getElementById("preStart");
const startBttn = document.getElementById("startBttn");
const applyBttn = document.getElementById("apply");
const configBttn = document.getElementById("settingsBttn");
const configContent = document.getElementById("settingsContent");
const pvpContent = document.getElementById("SelectVS");
const vsPlayer = document.getElementById("vsPlayer");
applyBttn.onclick = function showPVP(){
  defineCustomSize();
  configContent.style.display = "none";
  pvpContent.style.display = "block";
};

/**
startBttn.onclick = function startGame("standard"){
  preStart.style.display = "none";
  const preStart = document.getElementById("preStart");
  console.log("Start game function launched!");
  //todo
}**/
