var express = require("express");
var router = express.Router();

var user = require("../models/users")

var loggedIn = false;

var userID = "";
// var users = [{userName: "Bryan", password: "1234"},{userName: "Justin", password: "5678"}];

router.get("/auth", (req,res)=> {
    loggedIn=false;
        res.json(loggedIn);
        console.log("ping")
        // for (var i = 0; i < users.length; i++){

        // }
})

router.post("/submit", (req,res) => {
    console.log("Helllo@@@@")
    var allUsers = [];
    var index = "";
    
    user.find().then((docs)=>{
        for (var i =0; i< docs.length; i++){
            allUsers.push(docs[i].userName)
        }
        // console.log("hello", allUsers);
        // console.log(allUsers.indexOf(req.body.userName))
        index = allUsers.indexOf(req.body.userName);
        // console.log('are you thre??')
        if (index === -1){
        // console.log("work please")
        user.create(req.body).then(()=>{
            
            // console.log("success")
            user.findOne({userName: req.body.userName}).then(function(results){
                // console.log("these are our results!",results)
                userID=results._id
                // console.log("ID: " + userID) 
            })
        loggedIn=true;
        res.json(loggedIn);
        })

        }

        else {
            user.findOne({userName: req.body.userName}).then(function(results){console.log("these are our results!",results)
                userID=results._id
                console.log("ID: " + userID)
                loggedIn=true;
                res.json(loggedIn);
            } 
            )}
        
    })
    })

    
    //make a find request to pull all names from DB. Put them into an array an see if req.body.username === -1
    //if it does, its new user and perform a db.insert query
    // if not, then its established and make DB request findone based on that name
    // grab password and check it with req.body.password. If it works, proceed to HOME
    //assign ID variable to that users ID, pass that along to the /api Path taht gets 
    // pinged upon /home rendering. Make that the state values
    // if (req.body.userName === "Bryan" && req.body.password === "1234"){
    //     loggedIn = true;
    // }
//     res.end();
//     // res.json(loggedIn);
// })



router.post("/api", function(req, res){
    console.log("hello");
    user.create(req.body).then(()=>{
        res.json(true);
    }).catch((err) => {
        res.json(err)
    });
    console.log(req.body.userName)

    user.findOne({userName: req.body.userName}).then(function(results) { console.log(userID = results._id );

    console.log("userID: " + userID)
})
});

router.get("/id", function(req,res){
    user.findOne({_id: userID}).then(function(data){
        res.send(data);
        console.log(data, userID);
    })

})

module.exports = router;