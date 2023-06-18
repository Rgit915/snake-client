//Import the constants and message mappings
const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  SEND_MESSAGE_KEY,
  messageMappings,
} = require('./constants');

//stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener for stdin uses handleUserInput function that runs when input from keyboard received
  return stdin; //allow to listen for keyboard input and react to it
};

//to processes the received user input

const handleUserInput = function (keypress) {
  // \u0003 maps to ctrl+C input
if (keypress === '\u0003') {
  process.exit();  //terminate the program if 'ctrl + C' keypress
}
  //if other than 'ctrl + C' pressed ,process the user input
 if(keypress === MOVE_UP_KEY || keypress.toLowerCase() === MOVE_UP_KEY.toLowerCase() ){
  connection.write('Move: up'); //send the command string to server
 } 
 if (keypress === MOVE_LEFT_KEY || keypress.toLowerCase() === MOVE_LEFT_KEY.toLowerCase()){
  connection.write('Move: left');
 } 
 if (keypress === MOVE_DOWN_KEY|| keypress.toLowerCase() === MOVE_DOWN_KEY.toLowerCase()){
  connection.write('Move: down');
 }
 if (keypress === MOVE_RIGHT_KEY|| keypress.toLowerCase() === MOVE_RIGHT_KEY.toLowerCase()){
  connection.write('Move: right');
 }
 if (keypress === SEND_MESSAGE_KEY || keypress.toLowerCase() === SEND_MESSAGE_KEY.toLowerCase()){
   sendCreativeMessage(keypress);
 }
 
};

//Function to send a creative message to the server
const sendCreativeMessage = function(keypress){
  const myMessage = messageMappings[keypress]; //search the message in the mappings object
  if(myMessage){
  connection.write(`Say:  ${myMessage}`); // send the message to the server
  }
}

setupInput(); //calling the function

//module export
module.exports = {setupInput }