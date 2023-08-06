'use client'

import React, { useState } from 'react'
import Button from '@/components/buttons/button.js';
import colourstyle from '/styles/Colourtest.module.css';
import flex from '/styles/Flexible.module.css';
import logos from '/styles/Logos.module.css';
import dash from '@/styles/projectDashboard.module.css';
import StyledComponentsRegistry from '@/components/registery.tsx';
import Sidebar from '../components/Sidebar';
import projectTask from '../data/tasks.json';
import TaskTable from '@/components/task/projecttask';
import Meeting from '@/components/meetinglog/meetinglog';
import Chips from '@/components/chips/chips';
import contentblock from '@/styles/components/contentblocks.module.css'
import { useRouter } from 'next/router';
import navstyle from '/styles/Navbar.module.css'
import Navbar from '@/components/navbar';



function Home() {

    // const router = useRouter();

    // const handleNavigate = () => {
    //     router.push('/webexperiment/thankyou');
    // };

    // This part is meant for loading meeting logs table
    const projects = projectTask;
    const id = 2;

    const projcolumns = [
        { header: 'Meeting Name', field: 'meeting_name' },
        { header: 'Details', field: 'details' },
    ];

    // Find the project based on the ID
    const project = projects.find(p => p.project_id === id);

    const [sidebarShown, setSideBarShown] = useState(false)
    console.log(sidebarShown)
    const handleClick = () => {
        setSideBarShown(!sidebarShown)
        console.log('yes')
    }

    const router = useRouter();

    const handleSelectNewMeeting = () => {
        // Navigate to the login page (or any other route you want)
        router.push('/newmeeting');
    };



    return (
        <StyledComponentsRegistry>
            <Navbar />

            <div className={dash.headers} style={{ width: `var(--largeWidth)` }}>
                <Button
                    size="large"
                    logo="left"
                    fill={false}    
                    logoStyle={{ backgroundImage: `url("/iconsPurple/plus.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                    onClick={handleSelectNewMeeting}
                >
                    New Meeting
                </Button>
            </div>

            <div className={dash.headers} style={{ width: `var(--largeWidth)` }}>
                <h3>Teammates</h3>
                <div className={flex.flexRowSmollerGap}>
                    <div className={flex.flexColumnSmollerGap}>
                        <Chips name="hubob@gmail.com" profileImage="/profiles/Profile Pict (Cream).png" />
                        <Chips name="derrick@gmail.com" profileImage="/profiles/Profile Pict (Pink).png" />
                    </div>
                    <div className={flex.flexColumnSmollerGap}>
                        <Chips name="morgan@gmail.com" profileImage="/profiles/Profile Pict (Yellow).png" />
                        <Chips name="jefferson@gmail.com" profileImage="/profiles/Profile Pict (Purple).png" />
                    </div>
                </div>
            </div>

            <div className={dash.sectionhead}>
                <h3>Task List</h3>
            </div>
            <div className={dash.container}>
                <div className={dash.table}>
                    <TaskTable projectData={projectTask} showAssignedToColumn={true} projectnum={parseInt(0)} />
                </div>
            </div>

            <div className={dash.sectionhead}>
                <h3>Team Project Calender</h3>
            </div>
            <div
                className={`${dash.largeBlockContainer}`}
                style={{
                    backgroundImage: `url("/Blocks/Calendar.svg")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
            </div>

            <div className={dash.sectionhead}>
                <h3>Projects</h3>
            </div>
            <div className={dash.container}>
                <div className={dash.table}>
                    <Meeting project={project} columns={projcolumns} homepage={false} projectTask={projectTask} />
                </div>
            </div>



        </StyledComponentsRegistry>


    )
}

export default Home