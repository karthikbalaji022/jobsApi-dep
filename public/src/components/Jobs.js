import React,{useEffect,useState,useRef,} from 'react';
import axios from 'axios';
import './jobs.scss';
import JobsCard from './JobsCard';
import {useNavigate} from 'react-router-dom';
function Jobs(){
    const company=useRef();
    const role=useRef();
    const status=useRef();
    const navigate=useNavigate();
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [jobData,setJobData]=useState();
    if(token===null)
    {
        setTimeout(()=>{
        navigate("/",{replace:true});
    },0);
    }
    useEffect(()=>{
        async function getAllData(){
            await axios({
                method:"get",
                url:"/api/user/jobs/",
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            .then(async (res)=>{
                return await res.data})
            .then((data)=>{
                const {data:getdata}=data
                setJobData(getdata);
            }).catch((e)=>{console.log("error in axios jobs get all "+e)})
        }
                getAllData();
    },[])
    
    async function handleSubmit(e){
        // e.preventDefault();
         await axios({
                method:"post",
                url:"/api/user/jobs/create",
                data:{
                    company:company.current.value,
                    role:role.current.value,
                    status:status.current.value
                },
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            .then()
            .catch(e=>{
                console.log(e+" error in axios jobs add"); 
            })

    }
    return(
        <>
        <div className='jobsContainer'>
            <div className='jobsFormContainer'>
                <h1>Enter details</h1>
                <form className='jobsForm'>
                <label htmlFor='company'>
                    Company:
                    <input type="text" className="companyBox" id="company" placeholder="Company" ref={company}/>
                </label>
                <label htmlFor='role'>
                    Role:
                    <input type="text" className="roleBox" id="role" placeholder="Role" ref={role}/>
                </label>
                <label htmlFor='status'>
                    status:
                    <select id="status" name='status' ref={status}>
                        <option value="Pending">Pending</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Phone round">Phone round</option>
                        <option value="Selected">Selected</option>
                    </select>
                </label>
                <input type="submit" className='jobsSubmit' value="Submit" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
        <JobsCard card={jobData} token={token}/>
        </>

    )
}
export default Jobs;