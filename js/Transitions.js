/**
 * JavaScript File
 *
 * This file has the page transitions between sections and displays
 *
 * @author João Rafael - Up201711192
 */
let startForm = document.getElementById("StartForm");
//let userName = document.getElementById();
//let newUser = new User();
/*function User(user, password){
    this.user = user;
    this.password = password;
}
function Info(email){
    this.email = email;
}*/

let logIn = document.getElementById("LogIn");
logIn.onclick = function enter(){
    startForm.style.display = "none";

};
//For the tutorial modal
let modal = document.getElementById("modal");
let showTutorial = document.getElementById("Tutorial");
let closebutton = document.getElementById("close");

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