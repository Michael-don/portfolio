import React, { Component } from 'react';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className = 'about'>
                <h2>About me</h2>
                <h1>Personal Info</h1>
                <p>I really enjoy coding,Playing games,listening to music and hiking</p>
                <p>I first encoutered coding in Grade 10 where i studied Computer applications and technology or C.A.T for short,where i learnt more about computers such as the hardware and software of computers</p>
            
            <div className = 'row'>
                <p>First Name: Michael Donovan</p>
                <p>Last Name: Manuel</p>
                <p>Date of birth: 02 April 2000</p>
                <p>Email Address: michaeldon0204@gmail.com</p>

            <div className = 'education'>
                <h1>Eduction</h1>
                <p>Windsor High School</p>
                <i className = "fab fa-calendar-week">2014-2018</i>
                <h1>Subjects</h1>
                <p>English</p>
                <p>Maths Lit</p>
                <p>Afrikaans</p>
                <p>History</p>
                <p>Engineering Graphics and Design '(E.G.D)'</p>
                <p>Life Orientation</p>
                <p>Computer Applications and Technology '(C.A.T)'</p>
                </div>
                </div>
                
            <div className = 'skills'>
                <h1>Skills</h1>
                <div>
                    <span>
                        <i className = "fab fa-python">Python</i>
                    </span>
                </div>
                <div>
                    <span>
                        <i className = "fab fa-html5">HTML</i>
                    </span>
                </div>
                <div>
                    <span>
                        <i className = "fab fa-js-square">JavaScript</i>
                    </span>
                </div>
                <div>
                    <span>
                        <i className = "fab fa-css3">CSS</i>
                    </span>
                </div>
                <div>
                    <span>
                        <i className = "fab fa-bootstrap">Bootstrap</i>
                    </span>
                </div>
            </div>  
            </div>

    
                


        );
    }

}






export default About;