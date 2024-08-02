/*const mongoose=require('mongoose')
const StudentSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const StudentModel=mongoose.model("students",StudentSchema)
module.exports=StudentModel*/

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: String
});

const StudentModel = mongoose.model("students", StudentSchema);
module.exports = StudentModel;


