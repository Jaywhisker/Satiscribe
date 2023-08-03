import React from 'react';
import TaskTable from '../components/task/projecttask';
import projectTask from '../data/tasks.json';
import homeTask from '../data/home_test.json';

const TaskTablePreview = () => {
  const projectnum = 0;

  return (
    <div>
      <h1>Project Task Table Preview</h1>
        <TaskTable projectData={projectTask} showAssignedToColumn={true} projectnum={parseInt(0)} />
      <h1>Home Task Table Preview</h1>
        <TaskTable projectData={homeTask} showAssignedToColumn={false} />
    </div>
  );
};

export default TaskTablePreview;
