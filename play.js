//Import the 'net' module
const net = require("net");

//establishes a connection with the game server
const connect = function () {
const conn = net.createConnection({
  host : "localhost", // IP address     
  port : 50541,       //PORT nmuber here
}); 

//to handle incoming data
conn.on("data",(data) => {
 console.log("Message from Server:", data);
});

//interpret incoming data as text
conn.setEncoding('utf-8');
return conn;
};


console.log("Connecting .....")
connect();