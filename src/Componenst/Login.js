import React, { useState } from 'react'
import "./Login.css"
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const data = {
        email,
        password
    }
    const Loginsubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/Auth/login", data).then(res=>{
            console.log(res)
            alert(res.data.msg)
            navigate("/home")

        }).catch(err=>{
            setEmail("");
            setPassword("")
            alert(err.response.data.msg)
            
        })
    }

    return (
        <div style={{ width: "50%" }} className='loginform'>
            <form className='form-group' onSubmit={Loginsubmit}>

                <div style={{ textAlign: "center" }}>
                    <h3>Login in to your account</h3>
                </div>

                <div>
                    <label className='form-label'>Email Address:</label>
                    <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label className='form-label'>Password:</label>
                    <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div>
                    <button className='btn btn-success' style={{ width: "100%" }}>Sign In</button>

                    <div style={{ textAlign: "center" }}>
                        <span>Don't have an account? <Link to="/">Register here</Link></span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login