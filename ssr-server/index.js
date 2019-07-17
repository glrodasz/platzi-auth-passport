const express = require("express");

const { config } = require("./config");

const app = express();

// body parser
app.use(express.json());

app.post("/auth/sign-in", async function(req, res, next) {

});

app.post("/auth/sign-up", async function(req, res, next) {

});

app.get("/movies", async function(req, res, next) {

});

app.post("/user-movies", async function(req, res, next) {

});

app.delete("/user-movies/:userMovieId", async function(req, res, next) {

});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
