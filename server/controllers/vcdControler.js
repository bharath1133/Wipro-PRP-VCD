const { json } = require("body-parser");
const vcdModel = require('../models/vcdModel');


const getVcds = async (req, res) => {
   try {
      const vcds = await vcdModel.find();
      res.send(vcds).status(200)
   } catch (err) {
      console.log(err);
      res.send(err).status(404)
   }
};


const addVcd = async (req, res) => {
   const vcd = req.body.vcd

   try {
      const newVcd = new vcdModel({
         name: vcd.name,
         image: vcd.image,
         Quality: ['High', 'Medium', 'Low'],
         category: vcd.category,
         description: vcd.description,
         prices: [vcd.prices]
      })
      await newVcd.save()
      // alert("vcd added successfully")
      res.send('vcd added successfully')
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}




const updateVcd = async (req, res) => {
   const vcdid = req.body.vcdid
   try {
      const vcd = await vcdModel.findOne({ _id: vcdid })
      res.send(vcd)
   } catch (error) {
      return res.status(400).json({ message: error });
   }
}



const editvcd=async (req,res)=>{
   const editedvcd=req.body.editedvcd

   try{
      const vcd=await vcdModel.findOne({_id:editedvcd._id})

      vcd.name=editedvcd.name,
      vcd.description=editedvcd.description,
      vcd.image=editedvcd.image,
      vcd.category=editedvcd.category,
      vcd.prices=[editedvcd.prices]

      await vcd.save()

      res.send("vcd details are edited successfully")
   }catch(error){
      return res.status(400).json({message:error})
   }
}





const deleteVcd = async (req, res) => {
   const vcdid = req.body.vcdid
   try {
      await vcdModel.findOneAndDelete({ _id: vcdid })
      res.send("vcd deleted successfully")
   } catch (error) {
      return res.status(400).json({ message: error })
   }
}



module.exports = {
   getVcds,
   addVcd,
   updateVcd,
   deleteVcd,
   editvcd,
}