import React,{memo,useRef} from 'react';
import './login.scss';
import axios from 'axios';
import {
    Link, useNavigate
} from 'react-router-dom'
function Login(){
    const email=useRef();
    const pass=useRef();
    const navigate=useNavigate();

    async function login(e)
    {
        e.preventDefault();
        await axios({
            method:"post",
            url:"/api/user/login",
            data:{
                email:email.current.value,
                password:pass.current.value
            }
        }).then(res=>res.data).then(data=>{
            localStorage.setItem("token",data.token);
            navigate('/jobs');
        }).catch((e)=>{navigate('/error')});
    }
    return(
        <div className='login '>
            <div className='loginContainer'>
                <h1>Login</h1>
                <form className='loginDetails'>
                    <label htmlFor='email'>
                    Email:
                    <input type="text" className='emailInp' placeholder='Email' id="email" ref={email}/>
                    </label>
                    <label htmlFor='password'>
                    Password:
                    <input type="password" className='passInp' placeholder='password' id="password" ref={pass}/>
                    </label>
                    <input type="submit" id="loginSubmit" value="Submit" onClick={(e)=>{login(e)}}/>
                    <p className='redirect'> Not a member? <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default memo(Login);