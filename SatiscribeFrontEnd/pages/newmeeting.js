'use client'

import React, { useState } from 'react'
import navstyle from '/styles/Navbar.module.css'
import pagestyle from '/styles/newmeeting.module.css'
import { Button } from '../components';
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';
import StyledComponentsRegistry from '../components/registery.tsx'

function newmeeting() {

    const [sidebarShown, setSideBarShown] = useState(false)
    console.log(sidebarShown)
    const handleClick = () => {
        setSideBarShown(!sidebarShown)
        console.log('yes')
    }

    return (
        <StyledComponentsRegistry>
            <div >
                <div className={navstyle.topnav}>
                    <div className={navstyle.left_nav}>
                        <div style={{ width: '200px' }}>
                            <Sidebar
                                sidebarShown={sidebarShown}
                                onClick={handleClick}
                            />
                        </div>
                        <h3>Satiscribe</h3>
                    </div>
                    <div className={navstyle.centralize}>
                        <h3>Project Name</h3>
                    </div>
                    <div className={navstyle.right_nav}>
                        <h6>Home</h6>
                        <h6>Profile</h6>
                        <h6>Logout</h6>
                    </div>
                </div>
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
                            onClick={() => alert('Filled Button (small) with Right logo clicked!')}
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