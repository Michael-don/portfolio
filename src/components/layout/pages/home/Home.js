import React from 'react';
import './Home.css';



const backStyles = {
        height: '50vh',
        backgroundSize: 'cover'
    }

const Home = () => {
        return(
            <div>
            <header style = {backStyles}>
               <h1>Hello World! I'm</h1>
                   <p>Michael Manuel</p>
           </header> 
            </div>
           


        );
    }


export default Home;