const express = require("express");
const exercise = require("./exerciseObject");

const router = express.Router();

router
    .get("/session", (req, res) => res.send(exercise.session))

    .post("/session/users",(req, res) => {
        if(req.body.password == "password"){
            let user = exercise.session.users.find(x=> x.fbid == req.body.fbid);
            if(!user){
                user = { name: req.body.name, id: exercise.session.users.length, fbid: req.body.fbid, picture: req.body.picture };
                exercise.session.users.push(user);                
            }
            res.status(201).send(user);
        }else{
            res.status(403).send("Invalid Password");
        }
    })

    .post("/session/progress", (req, res) => {
        let progressObject = {progress: req.body.progressData } ;
        exercise.session.progress = progressObject;
        res.status(201).send(progressObject);
    })


module.exports.router = router;