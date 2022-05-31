import React,{useLayoutEffect,useState,useRef} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Nav(){
    
    const [token,setToken]=useState()
    const [user,setUser]=useState();
    
    useLayoutEffect(()=>{
        (async function(){
            const dat= await localStorage.getItem("token")
            setToken(dat);
        })();
        axios({
            method:"get",
            url:"/api/user/jobs/getuser",
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }).then(async (res)=>{
            console.log(res," in axios")
            return await res.data
        }).then( data=>{
            const dat={...data};
            setUser(dat);
        }).catch((E)=>console.log(E," in nav"));
    },[token]);
        console.log(user,"outside axios")
function handleLogout(){
    setToken();
    setUser();
    localStorage.removeItem("token");
}
    return(
        
    <div className="nav">
    <h1 className="title">Jobs <p>Api</p></h1>
    {user &&
    <div className='logout'>
    <h3>{`Hi ${user.name}`}</h3>
    <Link to='/'> <button className='logout' onClick={handleLogout}>LogOut</button></Link>
    </div>
        }
    </div>
    )
}

export default Nav;