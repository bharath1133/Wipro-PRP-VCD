const userModel = require("../models/userModel");

const addUser = async (req, res) => {
    const { name, mail, password } = req.body
    const newUser = new userModel({ name, mail, password })
    // console.log(newUser)
    try {
        await newUser.save();
        res.send('user registered successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}




const loginUser = async (req, res) => {
    const { mail, password } = req.body

    try {
        const user = await userModel.find({ mail, password })

        if (user.length > 0) {
            // res.send('user logged in successfuly')
            //send registred detais of user from backend to frontend local storage once user login is success
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentUser)
        } else {
            // alert("user login failed")
            return res.status(400).json({ message: 'user login failed' })
        }
    } catch (error) {
        return res.status(400).json({ message: 'something went wrong' })
    }
}


const getallusers = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}



const deleteUser = async (req, res) => {
    const userid = req.body.userid

    try {
        await userModel.findOneAndDelete({ _id: userid })
        res.send("user deleted successfully")
    } catch (error) {
        return res.status(400).json({ message: error });
    }
}


module.exports = {
    addUser,
    loginUser,
    getallusers,
    deleteUser
};