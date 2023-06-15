//Import 'connect' module using ES6 shorthand syntax
const {connect} = require("./client");

console.log("Connecting .....")
connect();
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //event listener for stdin uses handleUserInput function that runs when input from keyboard received
  return stdin; //allow to listen for keyboard input and react to it
};

//to processes the received user input

const handleUserInput = function (data) {
  // \u0003 maps to ctrl+C input
if (data === '\u0003') {
  process.exit();  //terminate the program if 'ctrl + C' keypress
}
  //if other than 'ctrl + C' pressed ,process the user input
 console.log("Received input: ", data)
};

setupInput(); //calling the function