const express = require('express');


const PORT = process.env.PORT || 3001;
const app= express();






// tells server to listen on port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});