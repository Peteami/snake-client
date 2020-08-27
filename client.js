const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    // host: '135.23.222.131',
    // port: 50542,
    host: IP,
    port: PORT
  });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 


    conn.on('connect', (data) => {
      console.log("successfully connected to game server!");
      conn.write("Name: Pet")
      // setInterval(() => {
      //   conn.write("Move: up");
      // }, 50);

    })

    return conn;
  }
  
  module.exports = {connect};