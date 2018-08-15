const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
     userName:{
         type: String,
         required: true
     },
     password: {
         type: String,
         required: false 
     },

     practiceField:{
         type:String
     },
     Post:[
        {
        postName:{
             type: String,
             required: true
        },
        
        postDescription:{
            type: String,
            required: true
        },
       
        link: {
            type: String,
            required: false
        
        }
    }]

    
})

const user = mongoose.model("user", userSchema);

module.exports = user;