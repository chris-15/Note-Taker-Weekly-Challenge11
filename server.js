// listing all required packages or files needed to run the server
const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes");

// require package for uuid which creates random unique id 
const { v4: uuidv4 } = require('uuid');

const notes = require("./db/db.json");

const PORT = process.env.PORT || 3111;
const app = express();

// this makes sure the js and css files load with the html
app.use(express.static("public"));

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming json data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// tells server to listen on port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
