var mongoose = require('mongoose')
   var Schema = mongoose.Schema

   const sondageModel = new Schema ({

    titre: {type : String},
    sujet : {type : String},
    reponse : {
        yes : {type : Number},
        no : {type : Number}

    },

   
   })
 module.exports=mongoose.model("sondage", sondageModel)