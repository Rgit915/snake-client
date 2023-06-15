//Import 'connect' module using ES6 shorthand syntax
const {connect} = require("./client");
const { setupInput } = require("./input");

console.log("Connecting .....")
connect();

setupInput();