const express =require('express');
const router = express.Router();
const userModel = require('../models/userSchema');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register
router.post('/register', async(req, res)=>{
   
    bcrypt.hash( req.body.password, 10, function(err, hash) {
        const user = new userModel({
          name : req.body.name,
          email:  req.body.email,
          password:hash,
     
      });
    user.save().then(x=>{
      res.json({message:"sent"})})
  
        })
        .catch(error => {
          console.log(error)
          res.status(500).json({
              message: "failed to create a user!"+error
              
          });
      });
      });
    
    
//  login
router.post('/login', async function  (req, res) {
    const user = await userModel.findOne({
              email: req.body.email
     })

       if (!user) {
         return res.status(401).json({
           message: "Auth failed"
         });
       }
       else{
   bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result){
    
    const data={
               email: user.email,
               userId:user._id,
           
             };
             const createdToken = jwt.sign(data,'secret', {expiresIn:'1h'});
             res.json({message:'login succesfully', token :createdToken })
            }
            else {
              return res.json({
                message: "Auth failed"
              });
            }
          }
       
        )};
  
   });

module.exports = router;
