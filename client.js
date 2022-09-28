const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on("connect", () => {
    console.log("You are connected! Ready to play Snake?")
    conn.write("Name: YUM")
  })

  // conn.on("connect", () => {
  //   conn.write("Move: up")
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 100)
  // })

  conn.on("data", () => {
    console.log("You just got kicked for idling!")
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect }