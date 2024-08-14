import React from "react";
import './intro.css';
import bg from '../../assets/hell.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    
<div class="fire-effect"></div>
 
    return (
       
        <section id="intro">
       
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Blendi</span> <br />Web Programmer</span>
                <p className="introPara">I am a skilled web programmer with experience in  <br></br>developing complex web applications with interactive features and functionalities.</p>
              <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
            </div>
          <img src={bg} alt="Profile" className="bg" />
     
        </section>


    )
}

export default Intro;