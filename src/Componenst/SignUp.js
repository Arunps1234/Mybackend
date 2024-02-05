import React, { useState } from 'react'
import "./SignUp.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setphone] = useState("")
    const [password, setPassword] = useState("")

    const data = {
        firstname,
        lastname,
        email,
        phonenumber,
        password
    }

    //errors state

    const [firstnameerror, setFirstnameerr] = useState(false)
    const [lastnameerror, setlastnameerr] = useState(false)
    const [emailerror, setemailerr] = useState(false)
    const [phoneerror, setphoneerr] = useState(false)
    const [passworderror, setpassworderr] = useState(false)


    //
    const navigate = useNavigate();

    const submitRegister = (e) => {
        e.preventDefault()
        setFirstname("");
        setLastname("");
        setEmail("");
        setphone("");
        setPassword("")
        axios.post("http://localhost:5001/Auth/register", data).then(res => {
            console.log(res)
            
            alert(res.data.msg)
            navigate("/login")
        }).catch(err => {
            console.log(err)
            alert(err.response.data.msg)
        })
    }


    return (
        <div style={{ width: "50%" }} className='registerform'>
            <form className='form-group' onSubmit={submitRegister}>

                <div style={{textAlign:"center"}}>
                    <h3>Create Your Account</h3>
                </div>
                <div>
                    <label className='form-label'>Firstname *:</label>
                    <input type="text" className='form-control' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    {firstnameerror &&
                        <span className='text-danger'>Firstname is required</span>
                    }
                </div>


                <div>
                    <label className='form-label'>LastName *:</label>
                    <input type="text" className='form-control' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    {lastnameerror &&
                        <span className='text-danger'>Lastname is required</span>
                    }
                </div>

                <div>
                    <label className='form-label'>Email *:</label>
                    <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailerror &&
                        <span className='text-danger'>Email is required</span>
                    }
                </div>

                <div>
                    <label className='form-label'>Phone *:</label>
                    <input type="text" className='form-control' value={phonenumber} onChange={(e) => setphone(e.target.value)} />

                    {phoneerror &&
                        <span className='text-danger'>Phone number is required</span>
                    }
                </div>

                <div>
                    <label className='form-label'>Password *:</label>
                    <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passworderror &&
                        <span className='text-danger'>Password is required</span>
                    }
                </div>
                <br />
                <div >
                    <button className='btn btn-success' style={{ width: "100%" }}>Sign Up</button>
                    <div style={{textAlign:"center"}}>
                    <span >Already have an account? <Link to="/login">Login</Link></span> 
                    </div>
                </div>
            </form>

        </div>
    )
}

export default SignUp