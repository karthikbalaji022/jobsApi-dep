import react from "react";
import { useNavigate } from "react-router-dom";

function Error(){
    const navigate=useNavigate();
    function handleClick(){
        navigate(-1);
    }
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"40px",width:"100vw",height:"100vh"}}>
            <h1 style={{color:"red"}}>Something went wrong while logging in or registering the user.</h1>
            <h3>If you are already registered then please Login in</h3>
            <h3>If you have already registered then please enter correct validation</h3>
            <button type="submit" onClick={handleClick} style={{width:"100px",padding:"10px",border:"0",borderRadius:"5px",backgroundColor:"black",color:"white",outline:"none"}}>Go Back!!</button>
        </div>
    )
}

export default Error;