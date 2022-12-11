
let express = require('express');

/*
--- Loggin Hello World into console log ---
console.log("Hello World");
*/

let app = express();

/*
--- Middleware to log request's information each time someone access a route ---
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
*/

//--- Middleware to retrieve current time and send a JSON as response ---
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
--- Uses .env file to set message to upper case ---
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

/*
--- Use an Stylesheet file to use with the HTML page ---
app.use("/public", express.static(__dirname + "/public"))
*/

/*
--- Send and HTML file as response ---
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
*/




































module.exports = app;
