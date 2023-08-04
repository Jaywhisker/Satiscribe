'use client'

import React, { useState } from 'react'
import Button from '@/components/buttons/button.js';
import colourstyle from '/styles/Colourtest.module.css';
import flex from '/styles/Flexible.module.css';
import logos from '/styles/Logos.module.css';
import home from '@/styles/home.module.css';
import StyledComponentsRegistry from '@/components/registery.tsx';
import Sidebar from '../components/Sidebar';
import homeTask from '@/data/home_test.json';
import TaskTable from '@/components/task/projecttask';
import projectTask from '../data/tasks.json';
import Meeting from '@/components/meetinglog/meetinglog';
import { useRouter } from 'next/router';


function Home() {

    // const router = useRouter();

    // const handleNavigate = () => {
    //     router.push('/webexperiment/thankyou');
    // };

    // This part is meant for loading meeting logs table
    const projects = projectTask;
    const id = 2; // Replace with the desired project ID

    const homecolumns = [
        { header: 'Project', field: 'project_name' },
        { header: 'Details', field: 'details' },
    ];
    // Find the project based on the ID
    const project = projects.find(p => p.project_id === id);

    return (
        <StyledComponentsRegistry>
            <Sidebar />
            <div className={home.headers} style={{width:`var(--largeWidth)`}}>
                <div className={flex.flexColumnNoGap} >
                    <h3>Hi Hubob:</h3>
                    <h3>Your Task List</h3>
                </div>
                
                <Button
                    size="smallmedium"
                    logo="left"
                    fill={false}
                    logoStyle={{ backgroundImage: `url("/iconsPurple/plus.png")`, zIndex: 1 }} // Change this to the URL of your right logo
                    // onClick={handleNavigate}
                >
                    Create New Project
                </Button>
            </div>
            <div className={home.taskcontainer}>
                <div className={home.table}>
                    <TaskTable projectData={homeTask} showAssignedToColumn={false} />
                </div>
            </div>
            <div className={home.sectionhead}>
                <h3>Projects</h3>
            </div>
            <div className={home.container}>
                <div className={home.table}>
                    <Meeting project={project} columns={homecolumns} homepage={true} projectTask={projectTask}/>
                </div>
            </div>

        </StyledComponentsRegistry>


    )
}

export default Home