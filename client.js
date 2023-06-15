//Import the 'net' module
const net = require("net");

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host : "localhost", // IP address     
    port : 50541,       //PORT nmuber here
  });

  //connect event triggered on a connection asap successfully established
  conn.on("connect",() =>{
    console.log("Successfully connected to game server");
    conn.write("Name: RA");  // send my Initials'RA' to server upon connection
    
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