import React, { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Signup.css'

function Signup(){
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }


    return (
        /*<div className="d-flex justify-content-centre align-items-centre bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="enter name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=>setname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>email</strong>
                        </label>
                        <input
                        type="email"
                        placeholder="enter email"
                        autoCapitalize="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=>setemail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>password</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="enter password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=>setpassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                    </form>
                    <p>Already have an account?</p>
                    <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
            </div>
        </div>*/

        <section class="container">
            <div className="login-container">
                <div class="circle circle-one"></div>
                <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
                <h1 class="opacity">register</h1>
                <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="enter name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=>setname(e.target.value)}
                        />
                        <input
                        type="email"
                        placeholder="enter email"
                        autoCapitalize="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e)=>setemail(e.target.value)}
                        />
                        <input
                        type="password"
                        placeholder="enter password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=>setpassword(e.target.value)}
                        />
                    <button class="opacity">REGISTER</button>
                    </form>
                    <div class="register-forget opacity">
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                    </div>
                    </div>
                <div class="circle circle-two"></div>
            </div>
            <div class="theme-btn-container"></div>
        </section>


    );
}
export default Signup;