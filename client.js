
const net = require('net');
const {IP, PORT} = require('./constants.js');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // challenge: update the connect function to also attach a event handler 
  // handle incoming data and console.log it for the player

  // data is happening when the client recieves a message from the server
  conn.on('data', (message) => {
    console.log(message);

  });

  // print a message to the screen when the connection is succesfully established.
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
    /*
    setTimeout(function(){      
      conn.write("Move: up")
    
      setTimeout(function(){      
        conn.write("Move: left")}, 2000);
      //conn.write("Move: up");
        
    
    }, 1000);
    //conn.write("Move: up");
    */   
    /* setInterval(function(){ conn.write("Move: up"); }, 1000);
    */
    });

  return conn;
}

module.exports  = {connect};