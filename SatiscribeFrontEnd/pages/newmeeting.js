'use client'

import React, { useState } from 'react'
import navstyle from '/styles/Navbar.module.css'
import pagestyle from '/styles/newmeeting.module.css'
import { Button } from '../components';
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';
import StyledComponentsRegistry from '../components/registery.tsx'
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';


function newmeeting() {

    const [sidebarShown, setSideBarShown] = useState(false)
    console.log(sidebarShown)
    const handleClick = () => {
        setSideBarShown(!sidebarShown)
        console.log('yes')
    }

    const router = useRouter();

    const handleSelectStartMeeting = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/meetinginprogress');
    };


    return (
        <StyledComponentsRegistry>
            <div >
                <Navbar />
                <div className={pagestyle.centeredContainer}>
                    <h4 className={pagestyle.centeredText}>
                        Template
                    </h4>
                </div>
                <div className={pagestyle.parentContainer}>
                    <div className={pagestyle.alignButton}>
                        <Button
                            size="small"
                            logo="left"
                            logoStyle={{ backgroundImage: `url("/iconsPurple/Edit.png")`, zIndex: 1 }}
                            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
                        >
                            Edit Template
                        </Button>
                        <Button
                            size="small"
                            logo="left"
                            fill={true}
                            logoStyle={{ backgroundImage: `url("/iconsFinalGray/Start.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                            onClick={handleSelectStartMeeting}
                        >
                            Start Meeting
                        </Button>

                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.centerContainer}>
                        <img className={pagestyle.smallBlock} src="/Blocks/Attendance Block.svg" />
                        <img className={pagestyle.mediumBlock} src="/Blocks/Keydates Block.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.mediumBlock} src="/Blocks/Meeting Details Block.svg" />
                        <img className={pagestyle.smallBlock} src="/Blocks/Link Block.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.smallBlock} src="/Blocks/Question Block.svg" />
                        <img className={pagestyle.mediumBlock} src="/Blocks/Feedback Blocks.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.mediumBlock} src="/Blocks/Poll Block.svg" />
                        <img className={pagestyle.smallBlock} src="/Blocks/Budgeting Block.svg" />
                    </div>
                </div>

            </div>
        </StyledComponentsRegistry>


    )
}

export default newmeeting