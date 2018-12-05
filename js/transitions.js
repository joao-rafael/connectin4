/**
* JavaScript File
* Made By: João Rafael Silva
**/
console.log("Transitions JavaScript File Loaded!");
const URL = "http://twserver.alunos.dcc.fc.up.pt:8008/";
let method = "POST";
var user = { nick: "bob", pass: "potato"};

//Functions to switch between contents
function transition(value){
  switch (value) {
    case 1:
      //TODO
      break;
    case 2:
      console.log("Opening modal for Tutorial");
      openModal();
      break;
    case 3:

      break;
    case 4:

      break;
    case 5:
      console.log("Opening register form");

    default:

  }

  return value;
}
//Opens the Tutorial Modal:
function openModal(){
  const modal = document.getElementById("tutorialModal");
  const closebutton = document.getElementById("closebttn");
  modal.style.display = "block";
  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }
  closebutton.onclick = function(){
    modal.style.display = "none";
  }
}
//Generate the intro Form:
const startForm = document.getElementById("LogInModal");
const logIn = document.getElementById("LogInBttn");
logIn.onclick = function enter(){
    let regUser = document.getElementById('Userbox').value;
    let regPass = document.getElementById("UserPass").value;
    user.nick = regUser;
    user.pass = regPass;
    register(user.nick, user.pass);
    startForm.style.display = "none";
};
//Changes to the register form
const registerForm = document.getElementById("registerForm");
const signUP = document.getElementById("SignUP");
signUP.onclick = function launchform(){
  registerForm.style.display = "block";
}
/**
FETCH FUNCTIONS
**/
function register(nick, pass){
  fetch(URL+"register", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify({"nick": nick, "pass": pass})
    }
   )
  .then(response=>{
    //if okay
      if(response.ok){
        alert("Registered with success!");
      }else{//if not okay
        alert("Failed to register or logIn");
      }
  })
}
//REGISTER USER
var user = { nick: "", pass: ""};
const regBttn = document.getElementById("registerUser");
const backBttn = document.getElementById("backBttn");
regBttn.onclick = function registerUser(){
    console.log("Register function launched");
    let regUser = document.getElementById('registerBox').value;
    let regPass = document.getElementById("registerPassBox").value;
    let confirmPass = document.getElementById("confirmPassBox").value;
    if(regUser == "" || regPass == ""){
      alert("Fill the form correctly!");
      document.getElementById("registerBox").focus;
      document.getElementById("registerPassBox").focus;
      document.getElementById("confirmPassBox").focus;
      return;
    }else if(regPass == confirmPass){
      //register user function
      user.nick = regUser;
      user.pass = regPass;
      registerForm.style.display = "none";
      register(regUser, regPass);
    }else if(regPass != confirmPass){
      alert("Fill the form correctly!");
      return;
    }
  }
  backBttn.onclick = function backtologin(){
    registerForm.style.display = "none";
}
//Settings
const settingsBttn = document.getElementById("settingsBttn");
const card1 = document.getElementById("preStart");
const card2 = document.getElementById("settingsContent");
settingsBttn.onclick = function showSettings(){
  card1.style.display = "none";
  card2.style.display = "block";
  //applyBttn.onclick =
}
