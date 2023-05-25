// const addUser=require("../controllers/userController");
// const loginUser=require("../controllers/userController")

const {addUser,loginUser,getallusers,deleteUser}=require("../controllers/userController")

const router=require('express').Router();

router.post('/register',addUser);
router.post("/login",loginUser);
router.get("/getallusers",getallusers);
router.post("/deleteuser",deleteUser)

module.exports=router;
