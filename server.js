const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.listen(port, function () {
  console.log("App listening on port: " + port);
});
