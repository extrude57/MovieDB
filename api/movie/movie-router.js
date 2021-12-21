
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js')
const Movie = require("./movie-model");

router.get("/movie", (req, res) => {
  try{

    const movies  = Movie.find();
    res.json(movies);


  }catch(err){
    console.log(err);
    res.status(500).json({
      message:"Cannot get Movie catch get block"
    });
  }throw( function(e){
    return e
  })
});

 


//Movie Model Findby generate Movie token 
function generateMovieToken(movie) {
  const payload = {
    id: movie.id,
    title: movie.title
  }
  const options = {
    expiresIn: 200000,
  }
  console.log(payload,jwtSecret);
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
