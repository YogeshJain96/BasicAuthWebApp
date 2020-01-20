const express = require("express");
const bodyParser = require("body-parser");
//const cors = require('cors')
//const path = require('path');

const PORT = 3000;

const api = require("./routes/api");

const app = express();

app.use(bodyParser.json());
app.use("/api", api);
//app.use(cors());
//app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function(req, res) {
  res.send("Hello from Server");
});
app.listen(PORT, function() {
  console.log("Server is up and running at http://localhost:" + PORT + "/");
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
