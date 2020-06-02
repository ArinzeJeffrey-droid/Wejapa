import React, {useState, useEffect} from 'react';
import axios from "axios"
import {toast} from "react-toastify"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const userLogin = {email, password}
        axios.post("https://wejapabackend.herokuapp.com/api/developer/login",userLogin)
        .then(response => {
            if(!response.error){
                console.log(response)
                window.location.href ="/jobs/all"
                toast.success("Login SuccessFull")
            }
        })
        .catch(error => {
            toast.error("Incorrect Password Or Email")
        })
    }
    return (
        <div className="container-fluid loginForm">
            <form onSubmit={(e)=> handleSubmit(e)} action="">
                <div className="form-group">
                    <input name="email" type="email" onChange={(e)=>handleEmail(e)} required placeholder="Enter Email" className="form-control"/>
                </div>
                <div className="form-group">
                    <input onChange={(e)=>handlePassword(e)} name="password" type="password" required placeholder="Enter Password" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default Login;