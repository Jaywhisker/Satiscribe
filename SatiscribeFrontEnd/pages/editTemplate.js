'use client'

import React, { useState } from 'react'
import navstyle from '/styles/Navbar.module.css'
import pagestyle from '/styles/editTemplate.module.css'
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
                            logoStyle={{ backgroundImage: `url("/iconsPurple/file folder approved-2.png")`, zIndex: 1 }}
                            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
                        >
                            Use Existing
                        </Button>
                        <Button
                            size="small"
                            logo="left"
                            fill={true}
                            logoStyle={{ backgroundImage: `url("/iconsFinalGray/Plus.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                            onClick={() => alert('Filled Button (small) with Right logo clicked!')}
                        >
                            Create New
                        </Button>

                    </div>
                </div>
                <div className={pagestyle.bigContainer3}>
                    <div className={pagestyle.centerContainer}>
                        <AgendaBlock />
                    </div>
                </div>
                <div className={pagestyle.dashedLine} />
                <div className={pagestyle.bigContainer2} >
                    <div className={pagestyle.centerContainer}>
                        <TaskSummariserBlock editable={false} />
                        <img className={pagestyle.trashicon} src="/icons/Trash.png" />
                    </div>
                </div>
                <div className={pagestyle.dashedLine} />
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.mediumBlock} src="/Blocks/Keydates Block.png" />
                        <img className={pagestyle.smallBlock} src="/Blocks/Attendance Block.png" />
                        <img className={pagestyle.trashicon} src="/icons/Trash.png" />
                    </div>
                </div>
                <div className={pagestyle.dashedLine} />
                <div className={pagestyle.bigContainer}>
                    <div className={pagestyle.nextContainer}>
                        <img className={pagestyle.smallBlock} src="/Blocks/Link Block.png" />
                        <img className={pagestyle.mediumBlock} src="/Blocks/Meeting Details Block.png" />
                        <img className={pagestyle.trashicon} src="/icons/Trash.png" />
                    </div>
                </div>
                <div className={pagestyle.dashedLine} />
                <div className={pagestyle.bigContainer4}>
                    <div className={pagestyle.nextContainer}>
                        <FullTranscriptBlockEditTemp />
                        <img className={pagestyle.trashicon} src="/icons/Trash.png" />
                    </div>
                </div>
                <div className={pagestyle.dashedLine} />
                <div className={pagestyle.bigContainer4}>
                    <div className={pagestyle.nextContainer}>
                        <CreateNewBlockEditTemp />
                    </div>
                </div>
                <div className={pagestyle.parentContainer}>
                    <div className={pagestyle.Aligncenter}>
                        <Button
                            size="small"
                            logo="left"
                            fill={true}
                            logoStyle={{ backgroundImage: `url("/icons/Save.png")`, zIndex: 1 }}
                            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
                        >
                            Save
                        </Button>
                    </div>
                    <div className={pagestyle.AlignButton2}>
                        <Button
                            size="small"
                            logo="left"
                            logoStyle={{ backgroundImage: `url("/iconsPurple/Trash.png")`, zIndex: 1 }}
                            onClick={() => alert('Border Button (Smol) with left logo clicked!')}
                        >
                            Discard Template
                        </Button>
                    </div>

                </div>
            </div>
        </StyledComponentsRegistry>


    )
}

export default editTemplate