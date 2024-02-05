import React, {useState} from 'react'
import "./Create.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 

const Create = () =>{
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState( )
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    const data = {
        firstname,
        lastname,
        email,
        phone, 
        gender
    }

const createUsers = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:5001/Users/create", data).then(res=>{
        console.log(res)
        alert(res.data.msg)
        navigate("/home")
    }).catch(err=>{
        console.log(err)
    })
}
    return(
        <div style={{width:"50%"}} className='usersform'>
<form className='form-group' onSubmit={createUsers}>

<div>
    <label className='form-label'>Firstname</label>
    <input type="text" className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
</div>

<div>
    <label className='form-label'>LastName</label>
    <input type="text" className='form-control' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
</div>

<div>
    <label className='form-label'>Email</label>
    <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
</div>

<div>
    <label className='form-label'>Phone</label>
    <input type="text" className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)} />
</div>


<div >
   <label>Gender : </label> 
&nbsp;
    <input type="radio" name="gender"  checked={gender=="Male"} onChange={()=>setGender("Male")}/> 
    <label>

Male
</label>
&nbsp;
    <input type="radio" name="gender" value="gender" checked={gender=="Female"}  onChange={()=>setGender("Female")}/>
    <label>
Female
</label>
</div>


<br/>
<div>
    <button className='btn btn-success' style={{width:"100%"}}>Create User</button>
</div>
</form>
        </div>
    )
}

export default Create