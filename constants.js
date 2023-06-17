//constant values
const IP = "localhost";
const PORT = 50541;

//store the movement keys in constants
const MOVE_UP_KEY = 'W';
const MOVE_LEFT_KEY = 'A';
const MOVE_DOWN_KEY = 'S';
const MOVE_RIGHT_KEY = 'D';
const SEND_MESSAGE_KEY = 'M'

//store the player's name/Initials
const playerName = 'RA';

//define the message mappings as an object
const messageMappings = {
  'H': `Hello from ${playerName}!`,
  'J': 'love this game!',
  'K': 'Good luck!',

};
//export
module.exports = {
  IP,
  PORT,
};