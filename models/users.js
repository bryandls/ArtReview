const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        require: true
    },
    
        password: {
            type: String,
            required: false
        }
    }
)

const user = mongoose.model("user", userSchema);

module.exports = user;
