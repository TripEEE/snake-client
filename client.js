const net = require("net");
const { IP, PORT } = require("./constants.js")
// establishes a connection with the game server
const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("You are connected! Ready to play Snake?")
    conn.write("Name: YUM")
    conn.write("Say: #1, ENGAGE!")
  })

  // conn.on("connect", () => {
  //   conn.write("Move: up")
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 100)
  // })

  conn.on("data", () => {
    console.log("You just got kicked!")
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect }