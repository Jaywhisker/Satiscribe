import logos from '../../styles/Logos.module.css'
import styles from '../../styles/buttons.module.css';
import flex from '../../styles/Flexible.module.css'

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TaskTableRow from './tablerow';

const TaskTable = ({ data }) => {
  // State to handle task data and any other state variables needed for sorting, filtering, etc.
  const [tasks, setTasks] = useState(data);

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {/* Table header content */}
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TaskTableRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
