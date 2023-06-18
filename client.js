//Import the 'net' module
const net = require("net");

//import constant values module
const {IP, PORT, playerName} = require("./constants");
//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address
    port: PORT,       //PORT nmuber here
  });

  //connect event triggered on when a successful connection established
  conn.on("connect",() =>{
    console.log("Successfully connected to game server");
    conn.write(`Name: ${playerName}`);  // send my Initials'RA' to server upon connection
    
  });
  
  //to handle incoming data
  conn.on("data",(data) => {
    console.log("Message from Server:", data);
  });
  
  //interpret incoming data as text
  conn.setEncoding('utf-8');
  return conn;
};

  

//Export connect function using ES6 shorthand syntax
module.exports = {connect};