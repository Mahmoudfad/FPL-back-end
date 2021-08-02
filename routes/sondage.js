const express =require('express');
const router = express.Router();
var sondageModel = require('../models/sondageModel');



router.post('/add', (req, res)=> {
    sondageModel.create({
      titre : req.body.titre,
      sujet:req.body.sujet,
      reponse : {
        oui : 0 , 
        non : 0
    }
   
    
    }).then(addsondage=>{
      res.json({
        message:"Done",
        
      })
    })
    
     })

     router.get('/getAllSondage',function(req, res, next){
        sondageModel.find().then(allSondage=>{
         res.json(allSondage)
       }).catch(err=>res.send(err))
       })




       router.put('/updateSondage/:id', (req, res, next) => {
        console.log(req.body);
        sondageModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(update => {
            res.json(response)
          })
        })
    










module.exports = router;