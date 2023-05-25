const express = require('express');
const db = require('./db');
const app = express();

//import routers
const vcdrouter=require('./routers/vcdRouter');
const userrouter=require('./routers/userRouter');
const loginrouter=require("./routers/userRouter");
const addvcdrouter=require("./routers/vcdRouter");
const updatevcdrouter=require("./routers/vcdRouter");
const deletevcd=require("./routers/vcdRouter");
const editvcd=require("./routers/vcdRouter");
const getallusers=require("./routers/userRouter");
const deleteuser=require("./routers/userRouter");

//middleware
app.use(express.json())

//Middlewares
// const setMiddlewares=(app)=>{
//     app.use("/api/",router)
// }
// setMiddlewares(app);

//routes
// const apiSetup=(app)=>{
//     app.use("/api/getallvcds",vcdrouter);
//     app.use("/api/users",userrouter);
// }
// apiSetup(app)

app.use("/api/",vcdrouter)
app.use("/api/users/",userrouter)
app.use("/api/users/",loginrouter)
app.use("/api/vcds/",addvcdrouter)
app.use("/api/vcds/",updatevcdrouter)
app.use("/api/vcd/",editvcd)
app.use("/api/vcds/",deletevcd)
app.use("/api/users/",getallusers)
app.use('/api/users/',deleteuser)




module.exports = app;