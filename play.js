const { connect } = require("./client.js")
const { setupInput } = require("./input.js")

const conn = connect()

setupInput(conn)
