/**
 * JavaScript File
 *
 * This file is the main Script for the board generating and Game
 *
 * @author João Rafael - Up201711192
 */
//pieces
class Slot{
       constructor(x,y,state){
        this.x = x;
        this.y = y;
        this.state = state;
    }

};
function generateBoard(x,y){
    const parent = document.getElementById(baseBoard);
    const board = document.createElement("div");
    board.className = "board";
    parent.appendChild(board);
    let countx = 0;
        let county = 0;
        while(county <= y){
            //criar coluna <div> 
            while(countx <= x){
                var slot = document.createElement("div");
                //criar div
                
                slot.className = "slot";
            }
            countx = 0;
            county++;
        }
}
