import React from "react";
import JobsImg from '../img/jobs.png'
import './landing.scss'
import {
    Link
} from 'react-router-dom'
function Landing(){

    return(
        <div className="landContainer">
            
            <div className="contentContainer">
                <div className="contentLeft">
                    <p className="contentLeftText">Lorem ipsum, amet quae quis id? Neque eos pariatur animi dolor dolores provident, culpa nemo vel praesentium veniam ab esse earum nulla d dolor sit amet crat, consequuntur inventore tenetur, unde tium rem necessitatibus rerum</p>
                    <br></br>
                    <p>istinctio amet quisquam blanditiis recusandae explicabo natus ratione consequatur. Perferendis repudiandae ad accusantium aliquam laborum quo magni, nostrum accusamus? Voluptatem quod doloribus odio repudiandae, quibusdam aut amet tempore cupiditate repellendus ad molestiae consequuntur omnis ipsam iure pariatur!</p>
                    <Link to='/login'><button className="login">Login</button></Link>
                </div>
                <div className="contentRight">
                    <img src={JobsImg} className="contentRightImg" alt="landingimg"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;