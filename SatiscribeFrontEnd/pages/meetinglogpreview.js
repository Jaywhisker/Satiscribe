import React from 'react';
import Meeting from '@/components/meetinglog/meetinglog';
import projectTask from '../data/tasks.json';

const MeetingLogPreview = () => {
    const projects = projectTask;
    const id = 2; // Replace with the desired project ID

    const projcolumns = [
        { header: 'Meeting Name', field: 'meeting_name' },
        { header: 'Details', field: 'details' },
    ];

    const homecolumns = [
        { header: 'Project', field: 'project_name' },
        { header: 'Details', field: 'details' },
    ];

    // Find the project based on the ID
    const project = projects.find(p => p.project_id === id);

    console.log('Project:', project); // Add this line to check the project data

    return (
        <div>
            <div>
                <h1>Home Meeting Log</h1>
                <Meeting project={project} columns={homecolumns} homepage={true} projectTask={projectTask}/>
            </div>
            <div>
                <h1>Project Meeting Log</h1>
                <Meeting project={project} columns={projcolumns} homepage={false} projectTask={projectTask}/>
            </div>
        </div>
    );
};

export default MeetingLogPreview;
