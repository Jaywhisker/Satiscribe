'use client'

import React, { useState } from 'react'
import Button from '@/components/buttons/button.js';
import colourstyle from '/styles/Colourtest.module.css';
import logos from '/styles/Logos.module.css';
import landing from '@/styles/webexperiment/Landingpage.module.css';
import StyledComponentsRegistry from '@/components/registery.tsx';
import StyledBox from '@/components/meetinglabel/meetinglabel';
import styles from '@/styles/meetinginprogress.module.css';
import contentblock from '@/styles/components/contentblocks.module.css'
import flex from '/styles/Flexible.module.css';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';


function MeetingInProgress() {


    const router = useRouter();

    const handleSelectStopMeeting = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/webexperiment/designB');
      };

    return (
        <StyledComponentsRegistry>
            <Navbar />
            <div className={`${styles.headers} ${flex.flexRowSmollerGap}`} style={{ width: `var(--largeWidth)` }}>
                <div className={styles.record}>
                    <div className={styles.ImageContainer}>
                        <img src="/iconsRed/Dot.png" alt="Profile" className={styles.Image} />
                    </div>
                    <p className={styles.text}>Recording in Progress</p>
                </div>
                <h4>Meeting In Progress</h4>
                <Button
                    size="small"
                    logo="left"
                    fill={true}
                    logoStyle={{ backgroundImage: `url("/iconsFinalGray/Stop.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                onClick={handleSelectStopMeeting}
                >
                    Stop Meeting
                </Button>
            </div>
            <div className={`${styles.largeBlockContainer} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flex.innerMargin}`}>
                    <h5>Add a Label for your full transcript and minutes</h5>
                    <div className={`${flex.flexRowNoGap}`} style={{ marginTop: '1vh' }}>
                        <div className={logos.small} style={{ backgroundImage: `url("/icons/Caution.png")`, zIndex: 1 }}></div>
                        <p className={styles.caution}>Please select a label after the topic of interest has been mentioned</p>
                    </div>
                    <div className={`${flex.flexColumnSmollerGap}`} style={{ marginTop: '5vh', fontFamily: 'Lato', fontSize: '3vh'}}>
                        <StyledBox version={1} text="ACTION ITEMS" />
                        <StyledBox version={2} text="HIGHLIGHTS" />
                        <StyledBox version={3} text="KEY DATES" />
                        <StyledBox version={4} text="MEETING DETAILS" />
                    </div>
                </div>
            </div>
        </StyledComponentsRegistry>


    )
}

export default MeetingInProgress