/**
* JavaScript File
* Made By: João Rafael Silva
**/
console.log("Transitions JavaScript File Loaded!");
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
    startForm.style.display = "none";
};
//Changes to the register form
const registerForm = document.getElementById("registerForm");
const register = document.getElementById("SignUP");
register.onclick = function launchform(){
  registerForm.style.display = "block";
}

//USER CLASS

//REGISTER USER

const regBttn = document.getElementById("registerUser");
const backBttn = document.getELementById("backToLogin");
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
    registerForm.style.display = "none";
    console.log("User registered");
    alert("User registered!!");
  }else if(regPass != confirmPass){
    alert("Fill the form correctly!");
    return;
  }
}

//Settings
const settingsBttn = document.getELementById("settingsBttn");
const card1 = document.getELementById("preStart");
const card2 = document.getELementById("settingsContent");
settingsBttn.onclick = function showSettings(){
  card1.style.display = "none";
  card2.style.display = "block";
  const applyBttn = document.getELementById("apply");
  applyBttn.onclick =
}
