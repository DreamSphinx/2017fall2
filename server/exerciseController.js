const express = require("express");
const exercise = require("./exerciseObject");

const router = express.Router();

router
    .get("/session", (req, res) => res.send(exercise.room))

    .post("/session/players",(req, res) => {
        if(req.body.password == "password"){
            let player = exercise.room.players.find(x=> x.fbid == req.body.fbid);
            if(!player){
                player = { name: req.body.name, id: exercise.room.players.length, fbid: req.body.fbid, picture: req.body.picture };
                exercise.room.players.push(player);                
            }
            res.status(201).send(player);
        }else{
            res.status(403).send("Invalid Password");
        }
    })


module.exports.router = router;