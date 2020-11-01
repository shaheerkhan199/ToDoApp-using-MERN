// Importing express
const express = require("express");
const ToDoApp = require("../models/todoApp");
// Using Router class of express
const router = express.Router();

// Defining Routes
router.get('/', (req, res) => {
    res.send("Hello world from express.js");
});

// Getting data from the database
router.get('/api', (req, res) => {
    const users = {"test":1};
    ToDoApp.find({  })
    .then((data) => {
        res.send(data);
    })
    .catch((error) =>  {
        console.log("Error : "+ error);
    });
});

// Storing Task from form 
router.post('/save', (req, res) => {
    const data = req.body;
    const newTask = new ToDoApp(data);
    newTask.save((error) => {
        if(error){
            res.status(500).send({
                msg:"Sorry! Internal server error",
            });
            return;
        } 
        return res.json({ msg:"Your data has been saved" });
    })
});

// Deleting a Task from Database 
router.delete('/delete', (req, res) => {
    ToDoApp.deleteOne(req.body, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
    });
});


// Storing static data into the database
// router.get('/save', () => {
//     const data = {
//         taskName: "Walking",
//         taskDesc: "will walk at least 10km in the morning",
//     }
//     const newTask = new ToDoApp(data); //new instance of the model
//     newTask.save((error) => {
//         if (error) {
//             console.log("Something went wrong!!!")
//         }
//         else {
//             console.log("Data is saved in our database");
//         }
//     });
// });

module.exports = router;
