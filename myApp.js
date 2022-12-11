const { json } = require('body-parser');
let express = require('express');

//console.log("Hello World");

let app = express();

/*
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
*/

app.get("/now", function (req, res, next) {
  req.time = new Date().toString();
  next();
},
function (req, res) {
  res.json({
    "time": req.time
  });
});

/*
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
*/

//app.use("/public", express.static(__dirname + "/public"))

/*
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
*/




































module.exports = app;
