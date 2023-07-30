import React from 'react';
import TaskTable from '../components/task/projecttask';
import styles from '../../styles/buttons.module.css';
import flex from '../../styles/Flexible.module.css';

const TaskTablePreview = () => {
  // Sample data for demonstration (replace this with your actual data)
  const sampleData = [
    {
      id: 1,
      taskName: 'Task 1',
      status: 'Not Started',
      assignedTo: 'John Doe',
      dueDate: '2023-08-01',
    },
    {
      id: 2,
      taskName: 'Task 2',
      status: 'In Progress',
      assignedTo: 'Jane Smith',
      dueDate: '2023-08-15',
    },
    // Add more tasks as needed
  ];

  return (
    <div className={flex.container}>
      <h1>Task Table Preview</h1>
      <TaskTable data={sampleData} />
      {/* Additional content or components can be added here */}
    </div>
  );
};

export default TaskTablePreview;
