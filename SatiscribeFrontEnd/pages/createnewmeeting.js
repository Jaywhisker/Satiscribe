'use client'

import React, { useState } from 'react'
import navstyle from '/styles/Navbar.module.css'
import pagestyle from '/styles/createnewmeeting.module.css'
import { Button } from '../components';
import colourstyle from '/styles/Colourtest.module.css'
import logos from '/styles/Logos.module.css'
import Sidebar from '../components/Sidebar';
import StyledComponentsRegistry from '../components/registery.tsx'
import AgendaBlock from '@/components/large blocks/AgendaBlockEditTemp'
import TaskSummariserBlock from '/components/large blocks/TaskSummariserMain';
import CreateNewBlockEditTemp from '@/components/large blocks/CreateNewBlockEditTemp'
import FullTranscriptBlockEditTemp from '../components/large blocks/fullTranscriptEditTemp';

function editTemplate() {

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
                        Client Template
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
                <div className={pagestyle.bigContainer3}>
                    <div className={pagestyle.centerContainer}>
                        <AgendaBlock />
                    </div>
                </div>
                <div className={pagestyle.bigContainer2} >
                    <div className={pagestyle.centerContainer}>
                        <TaskSummariserBlock editable={true} />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.mediumBlock} src="/Blocks/Keydates Block.png" />
                        <img className={pagestyle.smallBlock} src="/Blocks/Attendance Block.png" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.smallBlock} src="/Blocks/Link Block.png" />
                        <img className={pagestyle.mediumBlock} src="/Blocks/Meeting Details Block.png" />
                    </div>
                </div>
                <div className={pagestyle.bigContainer4}>
                    <div className={pagestyle.nextContainer}>
                        <FullTranscriptBlockEditTemp />
                    </div>
                </div>        
            </div>
        </StyledComponentsRegistry>


    )
}

export default editTemplate