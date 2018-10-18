//board generation
function buildBoard(col, row){
    for(countCol = 0, countCol < col, countCol++){
        document.getElementById("board").innerHTML += "<div class='col'>";
        for(countRow= 0, count < row, countRow++){
            document.getElementById("board").innerHTML += "<div class='slot'></div>";
        }
        document.getElementById("board").innerHTML += "</div>";
    }
}
let boardsize = 1;

switch(boardsize){
    case 1:
        buildBoard(7, 6);
        break;
    case 2:
        buildBoard(7, 6);
        break;
    case 3:
        buildBoard(7, 6);
        break;
}

//For the modal
var modal = document.getElementById("modal");
var showTutorial = document.getElementById("Tutorial");
var closebutton = document.getElementById("close");

        showTutorial.onclick = function(){
            modal.style.display = "block";
        } 
        closebutton.onclick = function(){
            modal.style.display = "none";
        }
        window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }

        }