const express = require("express");
const server = express();

server.use("/client", express.static("./jquery-mockup"))

server.listen(3000);

console.log("http://localhost:3000");