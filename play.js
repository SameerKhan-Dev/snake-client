const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541

    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // challenge: update the connect function to also attach a event handler 
  // handle incoming data and console.log it for the player

  // data is happening when the client recieves a message from the server
  conn.on('data', (message) => {
    console.log(message);

  });

  return conn;
}

console.log('Connecting ...');
connect();