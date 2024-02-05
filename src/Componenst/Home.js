import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link , useNavigate} from 'react-router-dom'




const Home = () => {

    const [users, setuser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5001/Users/getAllusers").then(res => {
            setuser(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    const deleteuser = (id) =>{
        axios.delete(`http://localhost:5001/Users/delete/${id}`).then(res=>{
            window.location.reload()
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    const navigatetoedit = (id) =>{
        navigate(`/edit/${id}`)
    }
    return (
        <div >
            <div>
                <Link to="/create">              
                  <button className='btn btn-success' style={{ float: "right", margin: "10px" }}>Create</button>
                </Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>FirstName </th>
                        <th>Lastname </th>
                        <th>Email  </th>
                        <th>Gender </th>
                        <th>Phone Number</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>



                    {users.length > 0 ?
                        users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.phone}</td>
                                <td style={{ display: "flex" }}>
                                    <button className='btn btn-warning' style={{ width: "70px" }} onClick={()=>navigatetoedit(user._id)}>Edit</button> &nbsp;
                                    <button className='btn btn-danger' style={{ width: "70px" }} onClick={()=>deleteuser(user._id)}>Delete</button>
                                </td>


                            </tr>
                        )) : <div><span>No user found! </span></div>
                    }



                </tbody>
            </table>
        </div>
    )
}

export default Home