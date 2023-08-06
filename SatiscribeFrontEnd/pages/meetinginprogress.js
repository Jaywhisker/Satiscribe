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


// function MeetingInProgress() {


//     const router = useRouter();

// const handleSelectStopMeeting = () => {
//     // Navigate to the login page (or any other route you want)
//     router.push('/webexperiment/designB');
// };


function MeetingInProgress() {

    const versionStyles = {
        1: {
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '0.1875rem',
            background: 'var(--Final_Calendar_Pink, #AE6378)',
            color: 'var(--Final_White)',
            padding: '1vh 2vw',
            textTransform: 'uppercase',
            cursor: 'pointer',
        },
        2: {
            display: 'flex',
            color: 'var(--Final_Dark_Purple)',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '0.1875rem',
            background: 'var(--Final_Calendar_Skin)',
            padding: '1vh 2vw',
            textTransform: 'uppercase',
            cursor: 'pointer',
        },
        3: {
            display: 'flex',
            color: 'var(--Final_White)',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '0.1875rem',
            background: 'var(--Final_Calendar_Green, #7A927C)',
            padding: '1vh 2vw',
            textTransform: 'uppercase',
            cursor: 'pointer',
        },
        4: {
            display: 'flex',
            height: '1.5rem',
            color: 'var(--Final_White)',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '0.1875rem',
            background: 'var(--Final_Calendar_Purple, #79616F)',
            padding: '1vh 2vw',
            textTransform: 'uppercase',
            cursor: 'pointer',
        },
    };

    const buttons = ["ACTION ITEMS", "HIGHLIGHTS", "KEY DATES", "MEETING DETAILS"]
    const router = useRouter();
    const [activeBox, setActiveBox] = useState(0)

    const handleOnClick = (index) => {
        setActiveBox(index)
        if (activeBox == index) {
            setActiveBox(0)
        } else {
            setActiveBox(index)
        }
    }

    const handleSelectStopMeeting = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/webexperiment/designA');

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
                    <div className={`${flex.flexColumnSmollerGap}`} style={{ marginTop: '5vh', fontFamily: 'Lato', fontSize: '3vh' }}>
                        {buttons.map((data, index) => (
                            <div
                                key={index}
                                tag={index + 1}
                                onClick={() => handleOnClick(index + 1)}
                                style={...versionStyles[index + 1]}
                            >
                                {activeBox == index + 1 ? 'RECORDING' : data}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </StyledComponentsRegistry>


    )
}

export default MeetingInProgress