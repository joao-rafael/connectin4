/**
* JavaScript File
* this file contains the global variables and constants
* Made By: João Rafael Silva
**/

//constants, stands for URL, and main game configuration
//const URL = "http://twserver.alunos.dcc.fc.up.pt:8008/";
const URL = "http://localhost:2044/";
const mainCols = 7;
const mainRows = 6;

//help variables - using var to make it global
var player1;
var player2;
var turn;
console.log("Global variables launched");

//game variables
var cols;
var rows;
var id;

//User class declaration
class User{
  constructor(nick, pass){
    this.nick = nick;
    this.pass = pass;
  }
}
