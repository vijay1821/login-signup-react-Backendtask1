import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function SignUp() {
    var history = useNavigate()
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');

    var handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/signup', { name, email, password })
            .then(res => {
                if (res.data === 'exist') {
                    alert('user already singned in')
                   
                }
                else if(res.data ==='notExist'){
                    history('/home',{state:{id:name}})
                }
            })
            .catch(e=>{
                alert('wrong details');
                console.log(e);
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>SignUp</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input type="text"  value={name} onChange={(e) => { setName(e.target.value) }} /><br /><br />
                <label htmlFor="email">Email :</label>
                <input type="email"  value={email} onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                <label htmlFor="password">Password :</label>
                <input type="password"  value={password} onChange={(e) => { setPassword(e.target.value) }} /><br /><br />
                <button className='btn btn-primary'>Register</button>
            </form>
            <p>Already Have an Account</p>
            <Link to={'/'} className='btn btn-info'>Login</Link>
        </div>
    )
}

export default SignUp;
