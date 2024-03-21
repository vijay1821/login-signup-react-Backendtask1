import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');
    var history=useLocation();
    var handelSubmit =async(e)=>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/',{email,password})
            .then(res => {
               if (res.data==='exist') {
                   history('/home',{state:{id:email}});
                  
               }else{
                alert('user is not signed in')
               }
            }).catch((err) => {
                alert('wrong details');
            });
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h2>Login</h2>
        <form action="" onSubmit={handelSubmit}>
            <label htmlFor="email">Email :</label>
            <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/><br /><br />
            <label htmlFor="password">Password :</label>
            <input type="text" name='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
        <p>For signin</p>
        <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Login;
