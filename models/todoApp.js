// Importing mongoose
const mongoose = require("mongoose");

// Defining Database schema (Mongodb)
const Schema = mongoose.Schema;
const ToDoAppSchema = new Schema({
    taskName: String,
    taskDesc: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Defining Model to access database
const ToDoApp = mongoose.model('ToDoApp', ToDoAppSchema);

module.exports = ToDoApp;