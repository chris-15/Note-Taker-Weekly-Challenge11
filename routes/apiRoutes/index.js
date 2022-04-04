const path = require("path");
const router = require("express").Router();


const notes  = require("../../db/db");

router.get("/notes", (req, res) => {
    res.json(require("../../db/db"));
});

module.exports = router;    