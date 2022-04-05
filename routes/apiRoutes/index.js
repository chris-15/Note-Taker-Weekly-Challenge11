const fs = require("fs");
const path = require("path");
const router = require("express").Router();

// require package for uuid which creates random unique id 
const { v4: uuidv4 } = require('uuid');


const notes  = require("../../db/db");

// get route that returns json data
router.get("/notes", (req, res) => {
    res.json(notes);
});

//function to create newNote and pushes to notes array in the json file
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notesArray}, null, 2)
  );

  return note;
}

// funcntion to validate input 
function validateNote(note) {
  if(!note.title || typeof note.title !== "string") {
    return false;
  }
  if(!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
};

// post route that creates new notes  from user input
router.post("/notes", (req, res) => {
  // sets unique id using uuid npm package
  req.body.id = uuidv4();

  if(!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted!");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(notes);
  }
});

module.exports = router;    