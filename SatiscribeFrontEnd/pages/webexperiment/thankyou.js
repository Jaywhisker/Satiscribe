import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import landing from '@/styles/webexperiment/Landingpage.module.css'
import Button  from '@/components/buttons/button.js';


function ThankYouPage() {
    return (
        <div className={landing.container}>
                <img src="/Logo.png" className={landing.logo}></img>
                <h4>WEB EXPERIMENT</h4>
                <br></br>
                <br></br>
                <br></br>
                <p style={{color: `var(--Final_White)`, fontWeight:'bold', fontSize:'3.5vh'}}>Thank you for participating in the web experiment. You may now leave the room.</p>
                <br></br>
                <br></br>
                <p style={{color: `var(--Final_White)`, fontWeight:'bold', fontSize:'3.5vh'}}> If you have any questions with regards to the web experiment, you may ask the experimenter outside.</p>
        </div>
    )
}

export default ThankYouPage