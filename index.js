//Importing the dotenv module
require("dotenv").config();

//Importing the express module
const express = require("express");

//Importing the DB
const db = require("./db/connect");

//Importing the cors
const cors = require('cors');

//Initializing the express
const app = express();

// Calling the express.json() method for parsing and call cors
app.use(express.json());
app.use(cors());

// To connect DB
db();

// Importing the routes
const tournamentRoutes = require("./routes/tournament.route");
const participantRoutes = require("./routes/participant.route");

//Adding the custom middleware
app.use("/api", tournamentRoutes);
app.use("/api", participantRoutes);

//Testing
app.use("/", (req, res) => {
    res.send(" welcome to Tournament Record Application!!!")
});

//Initializing the port number
const PORT = process.env.PORT || 8081;

// Listening to the port
app.listen(PORT, () => {
    console.log(`Application is running on PORT ${PORT}`);
});