const mongoose = require('mongoose');
const { dbConfig } = require('../config');

mongoose.connect(dbConfig.MONGO_URI,)

var db=mongoose.connection;

// db.on('connected',()=>{
//     console.log('DB connected');
// })

// db.on('err',()=>{
//     console.log('DB not connected');
// })

mongoose.connect(dbConfig.MONGO_URI)
    .then(
        () => console.log("connection successfull...")
    ).catch(
        err => console.log(err)
    )

module.exports=mongoose;

