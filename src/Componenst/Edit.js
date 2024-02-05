import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState( )
    const [phone, setPhone] = useState("")

    const  navigate = useNavigate()

    const {id}  = useParams();

    useEffect(()=>{
axios.get(`http://localhost:5001/Users/getUser/${id}`).then(res=>{
    console.log(res.data.getSignleUser)
    setFirstname(res.data.getSignleUser.firstname)
    setLastname(res.data.getSignleUser.lastname)
    setEmail(res.data.getSignleUser.email)
    setPhone(res.data.getSignleUser.phone)
    setGender(res.data.getSignleUser.gender)

}).catch(err=>{
    console.log(err)
})
    },[])

    const data = {
        firstname,
        lastname,
        email,
        gender,
        phone 
    }

    const updateUser = (e) =>{
e.preventDefault()
        axios.put(`http://localhost:5001/Users/update/${id}`,data ).then(res=>{
            console.log(res)
            navigate("/home")
        }).catch(err=>{
            console.log(err)
        })

    }
    return(
        <div style={{width:"50%"}} className='usersform'>
<form className='form-group' onSubmit={updateUser}>

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
    <button className='btn btn-success' style={{width:"100%"}}>Update User</button>
</div>
</form>
        </div>
    )
}

export default Edit