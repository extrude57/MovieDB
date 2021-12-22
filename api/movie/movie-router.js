
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js')
const db = require("./movie-model");

router.get("/", async (req, res) => {
  try{

    const movies  =  await db.find();
    res.status(200).json({movie:movies});


  }catch(err){
    console.log(err);
    res.status(500).json({
      message:"Cannot get Movie catch get block"
    });
  }
});





//get movies requests


// Get movies by id
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
      const movies = await db.findById(id);
      res.json(movies);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Cannot get movie by id!",
      });
    }
  });


/*post request with
  // TODO for future verisions see if 
  // front-end wants to map an array with instructions
  // so each step is on a new line for each individual instruction 
  // we can  make instructions here into 
  // an object or array so each direction is on a new 
  // element or has a new key value pair 

*/

router.post("/", async(req, res) => {

    try {
      const movie = req.body;
      // const newmovie = await db.add(addmovie);
      // res.json(newmovie);
    await  db.add(movie)
        .then(a =>{
          res.status(201).json(a)
        })
        .catch( e => {
          res.status(404).json({message: e.message})
        })

    // const newMovie = await db.add(movies);
    // res.status(201).json({movies:newMovie});

    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "could not add the movie "+e.message });
    }
    throw{
      function(e){
          return res.status(401).json({message:"401 post "+e.message})
      }
    }
    
      // finally{
        
      //     res.status(400).json({message:e})
      // }
  });


  // put request edit by /api/movies/id & its previous shape
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    try {
      const updatemovie = await db.update(id, changes);
      if (updatemovie) {
        res.json(updatemovie);
      } else {
        res.status(404).json({ message: 'invalid movie id' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'error with db', error: err });
    }
  });

  // delete request by id 

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const count = await db.remove(id);
      if (db) {
        res.json({ message: `deleted ${count} records` });
      } else {
        res.status(404).json({ message: 'invalid movie id' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'error with db', error: err });
    }
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
