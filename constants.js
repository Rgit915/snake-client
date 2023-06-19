//constant values
const IP = "localhost";
const PORT = 50541;

//define movements as an object
const movements = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
}

//store the player's name/Initials
const playerName = 'RA';

//define the message mappings as an object
const messageMappings = {
  'h' : 'Hello!',
  'j' : 'love this game!',
  'k' : 'Good luck!',

};
//export
module.exports = {
  IP,
  PORT,
  playerName,
  movements,
  messageMappings,
};