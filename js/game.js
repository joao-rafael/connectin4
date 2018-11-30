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

function Fill(id){
  //TODO
}
//console.log(generteGameMatrix(n,m));
function startGame(colst, cels){
  let gameMatrix = generateGameMatrix(cols, cels);
}
//const  = document.getElementById("base");
const preStart = document.getELementById("preStart");
const startBttn = document.getELementById("startBttn");
const configBttn = document.getELementById("settingsBttn");
const configContent = document.getELementById("settingsContent");
const pvpContent = document.getElementById("SelectVS");

/*startBttn.onclick = function showPVP(preStart, pvpContent){
  preStart.style.display = "none";
  pvpContent.style.display = "block";
}*/

/**
startBttn.onclick = function startGame("standard"){
  preStart.style.display = "none";
  const preStart = document.getElementById("preStart");
  console.log("Start game function launched!");
  //todo
}**/
