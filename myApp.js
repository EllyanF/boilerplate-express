let express = require('express');

console.log("Hello World");

let app = express();


app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({
        "message": "Hello json".toUpperCase()
    });
  else {
    res.json({
      "message": "Hello json"
    });
  }
})

//app.use("/public", express.static(__dirname + "/public"))

/*
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
*/




































 module.exports = app;
