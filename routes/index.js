const User = require("../models/User")

const router = require("express").Router()


router.get("/users", async (req,res)=>{
    try {
    const userList = await User.find({})
    res.status(200).json({status:true, msg:"List of users is ready", data:userList})
    } catch (error) {
console.log(error)
res.status(500).json({status:false,msg:error})
    }
})

router.post("/createUser", async (req,res)=>{
    try {
    const {firstName,lastName,email,phoneNumber} = req.body
    const user = await User.create({firstName,lastName,email,phoneNumber})
    res.status(200).json({status:true, msg:"User created", data:user})
    } catch (error) {
console.log(error)
res.status(500).json({status:false,msg:error})
    }
})

router.put("/cupdateUser/:id", async (req,res)=>{
    try {
    const {id} = req.params
    const user = await User.findById(id)
    if (user) {
      await User.findByIdAndUpdate(id,{...req.body})
      const user = await User.findById(id)
      res.status(200).json({status:true, msg:"User has been updated", data:user})
    }else {
      res.status(200).json({status:false, msg:"User does not exist"})
    }
    
    } catch (error) {
console.log(error)
res.status(500).json({status:false,msg:error})
    }
})

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    if (user){
      await User.findByIdAndDelete(id)
      res.status(200).json({ status: true, msg: "User has been deleted", data: user });

    } else{
      res.status(200).json({ status: false, msg: "User does not exist" });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, msg: error });
  }
});



module.exports= router