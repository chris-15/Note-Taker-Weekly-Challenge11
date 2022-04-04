//package or file requirements 
const path = require('path');
const router = require('express').Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../../public/index.html"));
});

module.exports = router;