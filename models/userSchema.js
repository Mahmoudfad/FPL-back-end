const mongoose = require('mongoose');
const schema = mongoose.Schema ;

const userSchema =new schema ({
    name : {type : String},
    email : {type : String},
    password :{type : String},
  

})

const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel