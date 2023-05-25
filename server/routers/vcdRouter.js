// const {getVcds}=require("../controllers/vcdControler");
// const addVcd=require("../controllers/vcdControler")

const {getVcds,addVcd,updateVcd,deleteVcd,editvcd}=require("../controllers/vcdControler")

const router=require('express').Router()
router.get("/getallvcds",getVcds);
router.post("/addvcd",addVcd);
router.post("/getvcdbyid",updateVcd);
router.post("/deletevcd",deleteVcd);
router.post("/editvcd",editvcd);



module.exports=router;