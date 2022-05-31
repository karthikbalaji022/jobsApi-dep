import './jobs.scss'
import React from 'react'
import {
    Link,useNavigate
} from 'react-router-dom'
import axios from 'axios';

function JobsCard({card,token})
{
    const navigate=useNavigate();
function handleClick(e,id){
    
    navigate('/edit',{state:{id:id,token:token}});
}

async function handledelete(e,id)
{
    await axios({
        method:"post",
        url:`/api/user/jobs/${id}`,
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }).catch((e)=>console.log(e,"user not deleted"))
}
    return(
        <div className='cardBoxContainer'>
        {card && card.map((item)=>{
return (
            <div className='cardContainer' key={item._id} >
                <div className='cardCompany'onClick={(e)=>{handleClick(e,item._id)}}>
                <h1> {item.role}</h1>
                    <div className='companyBox' style={{margin:"8px 0",backgroundColor: "rgba(0,0,0,.7)"}}>

                    <p style={{padding:"5px 10px",fontWeight:"900",color:"white"}}>{item.company.toUpperCase()}</p>
                    </div>
                </div>
                <div className='cardOptions'>
                    <div className='cardLeft'>
                        <a href='' onClick={(e)=>{handleClick(e,item._id)}}>Edit</a>
                        <a href='' onClick={(e)=>{handledelete(e,item._id)}}>Delete</a>
                    </div>
                    <p className='cardRight' style={{backgroundColor: "rgba(0,0,0,.7)",color:"white"}}>{item.status}</p>
                </div>
                <div className='date' >{item.createdAt.split('T')[0]}</div>
            </div>
)
        })
            
        }
        </div>
    );
}
export default JobsCard;