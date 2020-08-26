// const net = require('net');

/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });
  // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   return conn;
// }




const connect = require('./client')


/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}


const handleUserInput = function(input) {
  if (input === "\u0003") {
    process.exit;
  }
}


console.log('Connecting ...');
connect();