let express = require('express');

console.log("Hello World");

let app = express();

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/views/index.html");
})




































 module.exports = app;
