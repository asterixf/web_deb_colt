const express = require("express");
const app = express();

// app.use((req, res) => {
//   res.send("<h1>This is my App</h1>");
// });

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

//use : to create a pattern
// use req.params to get params
app.get("/:subpath/:id", (req, res) => {
  const { subpath, id } = req.params;
  res.send(`this is ${subpath} for ID:${id}`);
});

// use req.query to get query string params
app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`query string value is st to ${q}`);
});

app.get("/cat", (req, res) => {
  res.send("Cat Page");
});

app.get("/dog", (req, res) => {
  res.send("Dog Page");
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
