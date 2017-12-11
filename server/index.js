const express = require("express");
const exerciseController = require("./exerciseController");
const bodyParser = require("body-parser");

const port = 8081;
const server = express();

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  console.log(`http://localhost:${port}`);

server.use("/exercise", exerciseController.router );
    

//console.log(process.env);
server.listen(port);

