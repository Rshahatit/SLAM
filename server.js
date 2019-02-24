const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5500;
const exphbs = require("express-handlebars");

//Handle Bars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Log connection to server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Home page
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname + "/start.html"));
  const example = "Welcome to Pesca";
  res.render("index", {
    active_home: true
  });
  console.log("printing something here to look at logs for");
});

app.get("/about", (req, res) => {
  res.render("about", {
    active_about: true
  });
});

app.get("/metrics", (req, res) => {
  res.render("metrics", {
    active_metrics: true
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    active_dd: true
  });
});

app.post("/register", (req, res) => {
  const fido = require("./registerFIDO");
  fido();
});

app.get("/signin", (req, res) => {
  res.render("signin", {
    active_dd: true
  });
});

app.post("#", (req, res) => {});

app.get("#", (req, res) => {
  res.render("upload");
});

app.get("/track", (req, res) => {
  res.send("ok");
});

app.get("#", (req, res) => {});
