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
var player1;
var player2;
var turn;
function generateGameMatrix(n,m){
  console.log("Initializing game...");
  //Matrix
  let matrix = [];
  let columnArray = [];
  //visual elements
  const base = document.getElementById("base");
  const board = document.createElement("div");
  board.setAttribute("id", "board");
  board.className = "board";
  base.appendChild(board);
  console.log("Board base created Successfully");
  for(let colCount = 0; colCount < m; colCount++){
    const col = document.createElement("div");
    col.setAttribute("id", colCount);
    col.setAttribute("onclick", "'Fill(id)'");
    col.className = "col";
    board.appendChild(col);
    /*if(colCount = n - 1){
      colCount = n;
    }*/
    console.log("column " + colCount + " created");
    singleColArray = [];
    columnArray.push(singleColArray);
  }
  for(let count = 0; count < m; count++) {
         //logical matrix
         matrix[count] = [];
         console.log("Logical matrix row "+ count + " created");
         //visual elements creation - col
         //fill the cols with cells
         for(let count2 = 0; count2 < n; count2++){
           //put null on the logical matrix
           console.log("created " + count2 + " element from " + count + " line");
           matrix[count][count2] = null;
           //console.log("null attribuition");
           //visual elements creation - cells
           const cellParent = document.getElementById(count2);
           console.log("attatched to col" + count2);
           const cel = document.createElement("div");
           let colN = String(count);
           let celN = String(count2);
           let parseID = colN + celN;
           //id format colrow like c=0,r=2 ... 02
           cel.setAttribute("id", parseID);
           cel.className = "cell";
           columnArray[count][count2] = cel.id;
           cellParent.appendChild(cel);
         }

  }
  console.log(columnArray);
  console.log(matrix);
  console.log("Board Filled Successfully!!!!");
  console.log("Game Matrix Successfully created!");
  return [matrix, columnArray];
}

function defineCustomSize(){
  console.log("user want to define a custom size");
  const sizevalue = document.getElementById("size");
  const size = sizevalue.value;
  switch (sizevalue) {
    case 1:
      console.log("pattern value");
      n = 7;
      m = 6;
      break;
    case 2:
      console.log("pattern value");
      n = 6;
      m = 5;
      break;
    case 3:
      console.log("pattern value");
      n = 8;
      m = 7;
      break;
    default:
      n = 7;
      m = 6;
  }
  return [n,m];
}
function Fill(id){
  //TODO
  let selected = document.getElementById()
}
function startGame(){
  pvpContent.style.display = "none";
  var sizeArray = defineCustomSize();
  var n = sizeArray[0];
  var m = sizeArray[1];
  generateGameMatrix(n, m);
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
  configContent.style.display = "none";
  pvpContent.style.display = "block";
}

/**
startBttn.onclick = function startGame("standard"){
  preStart.style.display = "none";
  const preStart = document.getElementById("preStart");
  console.log("Start game function launched!");
  //todo
}**/
