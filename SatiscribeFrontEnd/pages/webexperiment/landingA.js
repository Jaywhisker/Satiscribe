import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import landing from '@/styles/webexperiment/Landingpage.module.css'
import Button  from '@/components/buttons/button.js';
import { useRouter } from 'next/router';

function LandingPageA() {
    
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/webexperiment/designA');
    };


    return (
        <div className={landing.container}>
                <img src="/Logo.png" className={landing.logo}></img>
                <h4>WEB EXPERIMENT</h4>
                <br></br>
                <br></br>
                <p style={{color: `var(--Final_White)`, fontWeight:'bold', fontSize:'3.5vh'}}>Welcome to Satiscribe Web Experiment, you should have a received a Task Instruction.</p>
                <p style= {{fontWeight:'bold', fontSize:'3.5vh'}}>Please read the Task Instruction carefully before proceeding with the experiment.</p>
                <br></br>
                <br></br>
                <p style={{color: `var(--Final_White)`, fontWeight:'bold', fontSize:'3.5vh'}}>Note: Once you click start, you will <span style={{color: `var(--Final_Light_Purple)`}}>NOT</span> be allowed to leave until the end of the web experiment.</p>
                <p style={{color: `var(--Final_White)`, fontWeight:'bold', fontSize:'3.5vh'}}>If you have any concerns, please seek the experimenter outside the room.</p>
                <br></br>
                <br></br>
                <br></br>
                <Button size="medium" fill onClick={handleNavigate}>START WEB EXPERIMENT</Button>
        </div>
    )
}

export default LandingPageA