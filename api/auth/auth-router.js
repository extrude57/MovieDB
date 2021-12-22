const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const router = require("express").Router();
const { jwtSecret } = require('../../config/secrets.js')
const Users = require("../users/users-model.js");
const isValid  = require("../users/users-service.js");

router.post("/register", async(req, res) => {
 
         

let promise1 = new Promise(function (resolve, reject) {

  try{

    res.setHeader("Content-Type","application/json");
    const credentials = req.body;
    const creds = { 
      "uname" : credentials.username, 
      "usersstack":1717.00
    }

     // To find the last row in the database needs to be integrated with user id&name
    //  Users.findByLastId()
    // .then(u =>{
    //   return resolve(console.log(u[0].max) );
    //   // resolve(u);
    // })
    // .catch(er =>{
    //   reject(er);
    // })


    // credentials.usersstack = 500.00;
    

    if (isValid(credentials)) {
      Users.stackAdd(creds)
    .then(user => {
      // res.writeHead(200);
      resolve(res.status(201).json(  { data: user }  ));
    })
    .catch(error => {
      // res.setHeader(500,"Content-Type", "text/html");
      reject(res.status(500).json({ message: error.message }));
    });
      const rounds = process.env.BCRYPT_ROUNDS || 8;
  
      // hash the password
      const hash = bcryptjs.hashSync(credentials.password, rounds);
  
      credentials.password = hash;
  
      // save the user to the database
      Users.add(credentials)
        .then(user => {
          resolve(r =>{
            console.log(user); //neds mid ware
            res.status(201).json({ data: user });
          })
        })
        reject(error => {
          // error.setHeader('Content-Type', 'text/html');
          res.status(500).json({ message: 'reject 500 '+error.message });
        });
  
       
        
  
    } else {
      reject(err =>{
        // res.writeHead(400);
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric "+err,
      });
      })
    }
  }
  catch(e){
    // res.setHeader("application/json", "text/html")
    console.log('catch',e);
  }
  throw (e)=>{
    res.setHeader("application/json", "text/html")
    res.status(200).json({message: "thrown 200"});
  }


});

promise1.catch(function(error) {
  // reject("error");
  console.log(error);
});
});

router.post("/login", (req, res) => {

  let promise2 = new Promise(function (resolve,reject){
      try{
          
    
          if (isValid(req?.body)) {
            const { username, password } = req.body;
            Users.findBy({ username: username })
              .then(([user]) => {
                // compare the password the hash stored in the database
                if (user && bcryptjs.compareSync(password, user.password)) {
                  // build token and send it back
                  const token = generateToken(user)
                  resolve(res.status(200).json({ message: "Welcome to our API", token }));
                } else {
                  reject(res.status(401).json({ message: "Invalid credentials" }));
                }
              })
              .catch(error => {
                reject(res.status(500).json({ message: error.message }));
              });
          } else {
            reject(res.status(400).json({
              message: "please provide username and password and the password shoud be alphanumeric",
            }));
          }
      }catch(e){
          res.setHeader("application/json","text/html");
          reject(res.status(404).json({
            message: "404 Malformed issues"+e
        }));
      }
      throw(e)=>{
          res.setHeader("application/json","text/html");
          reject(res.status(200).json( {message:"thrown 200"} ));
      }
  });
  
  promise2.catch(function(error) {
    // reject("error");
    console.log(error);
  });
  
  
    });
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: 200000,
  }
  console.log(payload,jwtSecret);
  return jwt.sign(payload, jwtSecret, options)
}



router.delete('/logout', (req, res) => {
  // if (req.session) {
  //     req.session.destroy((err) => {
  //         if (err) {
  //             res.status(400).json({ message: 'error logging out' });
  //         } else {
  //             res.json({ message: 'logged out' });
  //         }
  //     });
  // } else {
  //     res.end();
  // }


  let promise3 = new Promise(function (resolve,reject){
    try{
        if (req?.session) {
            req.session.destroy((err) => {
                if (err) {
                    resolve(res.status(400).json({ message: 'error logging out' }));
                } else {
                    reject(
                        res.json({ message: 'logged out' })
                    );
                }
            });
        } else {
            reject(res.end());
        }
    }catch(e){
        res.setHeader("application/json","text/html");
          reject(res.status(404).json({
            message: "404 Malformed issues"+e
        }));
    }
    throw(e)=>{
        res.setHeader("application/json","text/html");
        reject(res.status(200).json( {message:"thrown 200"+e} ));
    
    }
});


promise3.catch(function(error) {
  // reject("error");
  console.log(error);
});



});


module.exports = router;