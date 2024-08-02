const express=require("express");
const mongoose=require('mongoose')
const cors=require('cors')
const StudentModel=require('./models/student')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.post('/update', async (req, res) => {
    const { userId, xp } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.xp = xp;
        // user.problems = problems;
        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post('/loadxp', async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const xp=user.xp;
        // user.problems = problems;
        // await user.save();
        res.status(200).json(xp);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    StudentModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }
        else
        {
            res.json("no record existed")
        }
    })
})

app.post('/register', (req, res) => {
    StudentModel.create(req.body)
        .then((register) => {
            res.json(register)
            // console.log(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.listen(3001,()=>{
    console.log("server is running")
})