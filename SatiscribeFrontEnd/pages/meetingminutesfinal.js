'use client'

import React, { useState } from 'react'
import navstyle from '/styles/Navbar.module.css'
import pagestyle from '/styles/newmeeting.module.css'
import { Button } from '../components';
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';
import StyledComponentsRegistry from '../components/registery'
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

    const handleBack = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/projectDashboard');
    };

    return (
        <StyledComponentsRegistry>
            <div >
                <Navbar />
                {/* <div className={pagestyle.centeredContainer}>
                    <h4 className={pagestyle.centeredText}>
                        Template
                    </h4>
                </div> */}
                <div className={pagestyle.topcontainer}>
                    <div className={pagestyle.alignButtonnew}>
                        <Button
                            size="small"
                            logo="left"
                            logoStyle={{ backgroundImage: `url("/iconsPurple/Back.png")`, zIndex: 1 }}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                    </div>
                    <div className={pagestyle.centeredContainer}>
                        <div className={pagestyle.textencapsulate}>
                            <h4 className={pagestyle.centeredText} style={{ inlineSize: '23vw', textAlign: "center" }}>
                                Meeting Minutes
                            </h4>
                            <h4 className={pagestyle.centeredText} style={{ inlineSize: '23vw', textAlign: "center" }}>
                                10 July 2023
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.centerContainer}>
                        <img className={pagestyle.largeBlock} src="/Final Meeting Minutes Blocks/Agenda Block.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.largeBlock} src="/Final Meeting Minutes Blocks/Task Summariser and Assign Block.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.mediumBlock} src="/Final Meeting Minutes Blocks/Keydates Block.svg" />
                        <img className={pagestyle.smallBlock} src="/Final Meeting Minutes Blocks/Attendance Block.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer} style={{ marginBottom: '0vh' }}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.smallBlock} src="/Final Meeting Minutes Blocks/Link Block.svg" />
                        <img className={pagestyle.mediumBlock} src="/Final Meeting Minutes Blocks/Meeting Details Block.svg" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer2}>
                    <div className={pagestyle.centerContainer2}>
                        <img className={pagestyle.largeBlock2} src="/Final Meeting Minutes Blocks/Full Transcript Block.svg" />
                        {/* <img className={pagestyle.smallBlock} src="/Final Meeting Minutes Blocks/Link Block.svg" /> */}
                    </div>
                </div>

            </div>
        </StyledComponentsRegistry>


    )
}

export default newmeeting