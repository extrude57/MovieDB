const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const session = require("express-session");

const movieRouter = require("./movie/movie-router.js");
// const usersRouter = require("./users/users-router.js");

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());



const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
    secure: process.env.SECURE_COOKIE || false,
    httpOnly: true, 
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
  name: "movieapp",
  secret: process.env.COOKIE_SECRET || "keepitsecretflyszonesnapsskeepitsafe",
};
// server.use(session(sessionConfig)); 

server.use("/api/movie", movieRouter); 

server.get("/", (req, res) => {
  res.json({ api: "movie api get up" });
});

module.exports = server;
