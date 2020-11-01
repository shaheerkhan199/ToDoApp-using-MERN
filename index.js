// Importing modules
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// Importing routes 
const routes = require("./routes/routes");

// Initializing an express app
const app = express();
// Setting port
const PORT = 8000;

// use morgan for http request logging
app.use(morgan("tiny"));

// MongoDB URI 
const MONGODB_URI = 'mongodb+srv://sheri:sherias2@todoappdb.hxf7k.mongodb.net/todoappdb?retryWrites=true&w=majority';

// username -> sheri or password -> sherias2 (db configurations)

// Connecting with mongodb
mongoose.connect(MONGODB_URI || 'mongodb://localhost/first_todo_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Checking whether the connection is established or not
mongoose.connection.on('connected', () => {
    console.log("Mongodb is connected");
});

// Parsing request into JSON
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// Hitting the main routes in route.js file (entry point)
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`App is running at http://127.0.0.1:${PORT}`);
})

