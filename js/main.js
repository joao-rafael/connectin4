/**
* JavaScript File
* Made By: João Rafael Silva
  GAME JavaScript
  generate the gameboard, gameloop and manages the game cards

  cols -> number of cols from connect4.
  rows -> number of rows from connect4.
**/
console.log("Game JavaScript File loaded!");
let GameID = 20;
var user = { nick: "bob", pass: "potato"};
/**
FETCH FUNCTIONS
**/
//join session
/*
function join(nick, pass, group, size){
  fetch(URL+"join", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify({"nick": user.name, "pass": user.pass, })
    }
  )
  .then(response=>{
    //if okay
    if(response.ok){
      alert("Wait to the next player");
      //now enters animation . need to implement
    }else{
      alert("Failed to join a session");
    }
  })
  .then(res => res.json())
}//leave
function leave(game, nick){
  fetch(URL+"leave", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify({"game": gameID, "nick", user.name})
    if(response.ok){
      alert("Exciting the game...");
      exitgame();
    }else{//if not okay
      alert("Failed");
    }
  })
}
//notify
function notify(nick, game, column){
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify({"nick": user.name, "game": gameID, "column": secCol})
    if(response.ok){
      alert("Notified server!");
      exitgame();
    }else{//if not okay
      alert("Failed);
    }
  })
}
//ranking
function ranking(game, nick){
  fetch(URL+"ranking", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify({"game": gameID, "nick", user.name})
    if(response.ok){
      alert("Exciting the game...");
      exitgame();
    }else{//if not okay
      alert("Failed");
    }
  })
}*/
function gameLoop(){
 //NEEDS TO RE-DO IT, THE OLDER CODE DOES NOT WORK PROPERLY!!
}
function Fill(id){
  let selected = document.getElementById(id);
  //TODO
}
function generateGameMatrix(rows, cols){
  console.log("Initializing game...");
  //Matrix
  let matrix = [];
  //visual elements
  const base = document.getElementById("base");
  const board = document.createElement("div");
  board.setAttribute("id", "board");
  board.className = "board";
  base.appendChild(board);
  console.log("Board base created Successfully");
  for(let count = 0; count < rows; count++) {
         //logical matrix
         matrix[count] = [];
         console.log("row "+ count + " created");
         //fill the cols with cells
         for(let count2 = 0; count2 < cols; count2++){
           if(count == 0 && count2 == 0){
             console.log("Create col launched");
             var colArray = [];
              //visual elements creation - col
             for(let countCols = 0; countCols < cols; countCols++){
               const col = document.createElement("div");
               //cols ID will be 0, 1, 2 ... cols
               col.setAttribute("id", countCols);
               col.setAttribute("onclick", "'Fill(this.id)'");
               col.className = "col";
               board.appendChild(col);
               console.log("col " + col.id + " created");
               //colArray[countCols] = col.id, cels[]];
             }
           }
           matrix[count][count2] = null;
           //visual elements creation - cells
           const cellParent = document.getElementById(count2);
           console.log("attatched to col" + count2);
           const cel = document.createElement("div");
           let colN = String(count);
           let celN = String(count2);
           let parseID = colN + celN;
           //id format colrow like c=0,r=2 => 02
           cel.setAttribute("id", parseID);
           cel.className = "cell";
           cellParent.appendChild(cel);
         }
  }
  console.log(matrix);
  console.log("Board Filled Successfully!!!!");
  console.log("Game Matrix Successfully created!");
  return matrix;
}
function startGame(){
  //put the section method here
  let rows = 6;
  let cols = 7;
  pvpContent.style.display = "none";
  const sizevalue = document.getElementById("size");
  const size = sizevalue.value;
  switch (sizevalue){
    case 1:
      console.log("pattern value");
      rows = 6;
      cols = 7;
      break;
    case 2:
      console.log("smaller value");
      rows = 5;
      cols = 6;
      break;
    case 3:
      console.log("bigger value");
      rows = 7;
      cols = 8;
      break;
    default:
      rows = 6;
      cols = 7;
  }
  matrix = generateGameMatrix(rows, cols);
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
