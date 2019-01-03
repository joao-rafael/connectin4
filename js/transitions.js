/**
 * JavaScript File
 * this is the transitions file.
 * Has the pruporse to switch between layout and
 * to make the connection with the server
 * Made By: João Rafael Silva
 **/
console.log("Transitions JavaScript File Loaded!");
let method = "POST";
var user = { nick: "", pass: "" };

//Functions to switch between contents
function transition(value) {
  switch (value) {
    case 1:
      //TODO
      console.log("Opening function");
      break;
    case 2:
      console.log("Opening modal for Tutorial");
      openModal();
      break;
    case 3:
      console.log("Exiting... reloading entire page");
      window.location.reload();
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
function openModal() {
  const modal = document.getElementById("tutorialModal");
  const closebutton = document.getElementById("closebttn");
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  closebutton.onclick = function() {
    modal.style.display = "none";
  };
}
//Generate the intro Form:
const startForm = document.getElementById("LogInModal");
const logIn = document.getElementById("LogInBttn");
logIn.onclick = function enter() {
  let regUser = document.getElementById("Userbox").value;
  let regPass = document.getElementById("UserPass").value;
  register(regUser, regPass);
};
//Changes to the register form
const registerForm = document.getElementById("registerForm");
const signUP = document.getElementById("SignUP");
signUP.onclick = function launchform() {
  registerForm.style.display = "block";
};
/**
FETCH FUNCTIONS
**/
// function register(nick, pass){
//         //const URL = "http://localhost:2044/"
//         console.log("inserted: " + nick + " " + pass);
//         console.log("Initializing fetch");
//         fetch(URL+"register", {
//           //URL + register = http://twserver.alunos.dcc.fc.up.pt:8008/register
//           method: 'POST',
//           headers:{
//             'Access-Control-Allow-Origin' : '*',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({'nick': nick, 'pass': pass}),
//           //JSON.stringify - parses the variables to JSON
//         })
//         .then(response => {
//           console.log("response promise?");
//           //then(function anonimous(response)
//           //if okay
//             if(response.ok){
//               //response.text().then(console.log);
//               response.json();
//               alert("user: " + nick + " registered/loged with success!");
//               return response.json();
//             }else{//if not okay
//               console.log("Request rejected with the error: " + response.statusText);
//               alert("Failed to register or logIn");
//             }
//         })
//         .then(json => {
//           console.log(JSON.stringify(json));
//         })
//         .catch(err => {
//           alert("error: " + err);
//         });
//       }
function register(nick, pass) {
  console.log("chegou");

  fetch("http://localhost:2044/register", {
    method: "POST",
    body: JSON.stringify({ user: nick, pass: pass }),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => {
      alert("error: " + err);
    });
}
// ranking
function ranking() {
  let lin = parseInt(document.getElementById("ranking-settings-lin").value);
  let col = parseInt(document.getElementById("ranking-settings-col").value);
  let data = { size: { rows: lin, columns: col } };
  console.log("ranking");
  fetch(URL + "ranking", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .then(j => {
      loadRanking(j.ranking);
    })
    .catch(error => {
      loadTextMessagePopUp(error);
    });
}

//REGISTER USER
const regBttn = document.getElementById("registerUser");
const backBttn = document.getElementById("backBttn");
regBttn.onclick = function registerUser() {
  console.log("Register function launched");
  let regUser = document.getElementById("registerBox").value;
  let regPass = document.getElementById("registerPassBox").value;
  let confirmPass = document.getElementById("confirmPassBox").value;
  if (regUser == "" || regPass == "") {
    alert("Fill the form correctly!");
    document.getElementById("registerBox").focus;
    document.getElementById("registerPassBox").focus;
    document.getElementById("confirmPassBox").focus;
    return;
  } else if (regPass == confirmPass) {
    //register user function
    registerForm.style.display = "none";
    register(regUser, regPass);
  } else if (regPass != confirmPass) {
    alert("Fill the form correctly!");
    return;
  }
};
backBttn.onclick = function backtologin() {
  registerForm.style.display = "none";
};
//show ranking
function loadRanking(rank) {
  let t = document.getElementById("ranking-table");
  t.innerHTML = "<tr><th>NICK</th><th>VICTORIES.</th><th>GAMES</th></tr>";
  setTimeout(() => {
    for (let i in rank) {
      let r = rank[i];
      let c, new_r;
      new_r = document.createElement("tr");
      c = new_r.insertCell(0);
      c.innerHTML = r.nick;
      c = new_r.insertCell(1);
      c.innerHTML = r.victories;
      c = new_r.insertCell(2);
      c.innerHTML = r.games;
      t.appendChild(new_r, t.children[1]);
    }
  }, 0);
}

//Settings
const settingsBttn = document.getElementById("settingsBttn");
const card1 = document.getElementById("preStart");
const card2 = document.getElementById("settingsContent");
settingsBttn.onclick = function showSettings() {
  card1.style.display = "none";
  card2.style.display = "block";
  //applyBttn.onclick =
};
