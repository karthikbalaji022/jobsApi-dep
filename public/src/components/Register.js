import React,{useRef} from 'react'
import axios from 'axios'
import './login.scss'
import {
    Link,
    useNavigate
} from 'react-router-dom'
function Login(){
    const navigate=useNavigate();
    const userName=useRef();
    const email=useRef();
    const pa=useRef();
    const success=useRef();
    async function handleSubmit(e){
        e.preventDefault();
        try{
        await axios({
            method:"post",
            url:"/api/user/register",
            data:{
                name:userName.current.value,
                email:email.current.value,
                password:pa.current.value
            }
        }).then((res)=>res.data).then(data=>{
            console.log(data);
            console.log(success.current.focus());
            navigate('/login');
        }).catch((e)=>{navigate('/error')});
      

    }catch(e){
        console.log({ty:"error caught",msg:e});
        success.current="not able to registered";
        // success.current.style={color:"red"};
    }
    }
    return(
        <div className='login '>
            <div className='loginContainer'>
                <h1>Register</h1>
                <form className='loginDetails'>
                <label htmlFor='name'>
                    Name:
                    <input type="text" className='nameInp' placeholder='name' id="name" ref={userName}/>
                    </label>
                    <label htmlFor='email'>
                    Email:
                    <input type="text" className='emailInp' placeholder='Email' id="email" ref={email}/>
                    </label>
                    <label htmlFor='password'>
                    Password:
                    <input type="password" className='passInp' placeholder='password' id="password" ref={pa}/>
                    </label>
                    <Link to='/login' style={{width:'100%'}}><input type="submit" id="loginSubmit" value="Submit" onClick={(e)=>handleSubmit(e)}/></Link>
                    <p className='redirect'> Already a member? <Link to='/login'>Login</Link></p>
                    <p ref={success}></p>
                </form>
            </div>
        </div>
    )
}

export default Login;