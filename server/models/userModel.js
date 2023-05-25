const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, require },
    mail: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false }
},
    {
        timestamaps: true,
    })

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;