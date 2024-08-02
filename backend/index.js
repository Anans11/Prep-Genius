const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors')
const StudentModel = require('./models/Student.js')
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { verifyAuthToken } = require("./middlewares/auth.middleware.js");
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
var jwt = require('jsonwebtoken');



const uri = process.env.MONGO_URI;
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });


app.post('/update', verifyAuthToken, async (req, res) => {
    const userId = req.userId;
    const { xp, problems, badge } = req.body;
    try {
        const user = await StudentModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.updateOne({ xp, problems, badge });
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post('/updatetop', verifyAuthToken, async (req, res) => {
    const userId = req.userId;
    const { puzzles, completed } = req.body;
    try {
        const user = await StudentModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.updateOne({ puzzles, completed });
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/loadprofile', verifyAuthToken, async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    try {
        const user = await StudentModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const name = user.name;
        const email = user.email;
        const completed = user.completed;
        const xp = user.xp;
        const badge = user.badge;
        res.status(200).json({ name: name, email: email, completed: completed, xp: xp, badge: badge });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/loadxp', verifyAuthToken, async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    try {
        const user = await StudentModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const xp = user.xp;
        res.status(200).json({ xp: xp });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/loadtop', verifyAuthToken, async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    try {
        const user = await StudentModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const puzzles = user.puzzles;
        const completed = user.completed;
        res.status(200).json({ puzzles: puzzles, completed: completed });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/loadproblems', verifyAuthToken, async (req, res) => {
    const userId = req.userId;
    console.log(userId);
    try {
        const user = await StudentModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const problems = user.problems;
        res.status(200).json({ problems: problems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
    console.log("request has reached userLogin");
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log('some detail is not recieved in userLogin controller');
            res.status(400).json({ message: 'Not sufficient details to login the user' });
            return;
        }

        const user = await StudentModel.findOne({ email: email });
        if (!user) {
            console.log('No user is found with provided email in Login user controller');
            res.status(404).json({ message: "Authentication Failed" });
            return;
        }
        console.log(user);
        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) {
            console.log("password doesn't match in Login user controller");
            res.status(404).json({ message: "Authentication Failed" });
            return;
        }

        const userId = user._id;

        var token = jwt.sign({ userId: userId }, process.env.SIGNATURE, { expiresIn: '2h' });
        var expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
        res.cookie("authToken", token, {
            httpOnly: true,
            expires: expiryDate,
            secure: false,
        }).status(200).json({ success: true, message: "user is successfully logged in.." });
    } catch (err) {
        console.log('Error catched in userLogin in controllers');
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error...', error: err });
    }
})

app.post('/register', async (req, res) => {

    console.log('request has reached user register')
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            console.log('some detail is not recieved in userSignup controller');
            res.status(400).json({ message: 'Not sufficient details to signup the user' });
            return;
        }
        let oldUser = await StudentModel.findOne({ email: email });
        if (oldUser) {
            console.log('A user is found with provided email in Signup User controller')
            res.status(400).json({ message: 'Email already Exisits' });
            return;
        }

        const saltRounds = 8;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new StudentModel({
            name,
            email,
            password: hashedPassword
        })
        await user.save();

        res.status(200).json({ success: true, message: "User is successfully signed up" });
    } catch (err) {
        console.log('Error catched in userSignup in controllers');
        console.log('error: ', err);
        res.status(500).json({ message: 'Internal Server Error...', error: err });
    }
})

app.listen(3001, () => {
    console.log("server is running")
})