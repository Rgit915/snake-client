//constant values
const IP = "localhost";
const PORT = 50541;

//store the movement keys in constants
const MOVE_UP_KEY = 'W';
const MOVE_LEFT_KEY = 'A';
const MOVE_DOWN_KEY = 'S';
const MOVE_RIGHT_KEY = 'D';
const SEND_MESSAGE_KEY = 'M';

//store the player's name/Initials
const playerName = 'RA';

//define the message mappings as an object
const messageMappings = {
  'H' : 'Hello!',
  'J' : 'love this game!',
  'K' : 'Good luck!',

};
//export
module.exports = {
  IP,
  PORT,
  playerName,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  SEND_MESSAGE_KEY,
  messageMappings,
};