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
 else if(keypress ==='w'|| keypress ==='W'){
  connection.write('Move: up'); //send the command string to server
 } else if (keypress ==='a'|| keypress ==='A'){
  connection.write('Move: left');
 } else if (keypress ==='s'|| keypress ==='S'){
  connection.write('Move: down');
 } else if (keypress ==='d'|| keypress ==='D'){
  connection.write('Move: right');
 } else{
  console.log('Invalid Input', keypress );
 }
 
};

setupInput(); //calling the function

//module export
module.exports = {setupInput }