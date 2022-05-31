import React,{useState,useEffect,useRef} from 'react';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './edit.scss'
function Edit(){
    const navigate=useNavigate();
    const companyu=useRef();
    const roleu=useRef();
    const status=useRef();
    const location=useLocation();
    const {id:id,token:token}=location.state;
    // console.log(id,token)
    const [curUser,setUser]=useState();
    useEffect(()=>{
        async function getuser(){
            await axios({
                method:'get',
                url:`/api/user/jobs/${id}`,
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem("token")}`
                }
            }).then(async (res)=>{
                // console.log(res.data," in update")

                return await res.data;
            }).then((data)=>{
                setUser({...data.jobsdata});
            }).catch((e)=>{console.log(e," in axios")})
        }
        getuser();
    },[])
    if(curUser)
    var {company:company,role:role}=curUser;
    else{
        var company="xyz";
        var role="xyz";
    }
    async function handlesubmit(e){
        e.preventDefault();
        await axios({
            method:"patch",
            url:`/api/user/jobs/${id}`,
            headers:{
                'Authorization':`Bearer ${token}`
            },
            data:{
                company:companyu.current.value,
                role:roleu.current.value,
                status:status.current.value,
            }
        }).then(async (res)=>await res.data)
        .then(data=>{console.log(data);navigate(-1);})
        .catch(e=>console.log(e, "update failed"))
    }
    return(
    <div className="editConatainers">
    <Link to='/jobs'>    <button className="dashboard">Dashboard</button></Link>
    <div className="editContainer">
        <h1>Update Job</h1>
        <form className="editForm">
        <label htmlFor='company'>
                    Company:
                    <input type="text" className="companyBox" id="company" placeholder={company} defaultValue={curUser && curUser.company} ref={companyu} />
                </label>
                <label htmlFor='role'>
                    Role:
                    <input type="text" className="roleBox" id="role" placeholder={role} defaultValue={curUser && curUser.role} ref={roleu}/>
                </label>
                
                <label htmlFor='round'>
                    Round:
                    <select ref={status} >
                    <option value="Phone round">Phone round</option>
                    <option value="Interview">Interview</option>
                    <option value="Pending">Pending</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                    </select>
                </label>
                <Link to='/jobs'><input type="submit" className='jobsSubmit' value="Submit" onClick={handlesubmit}/></Link>
        </form>
    </div>
    </div>
    );
}

export default Edit;
