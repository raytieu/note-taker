const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
  res.json(noteData);
});

app.post("/api/notes", function(req, res) {
  noteData.push(req.body);
  res.json(true);  
});

app.delete("/api/notes/:id", function(req, res) {
  // noteData.splice(req.params.id);
  // res.json(true);  
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});