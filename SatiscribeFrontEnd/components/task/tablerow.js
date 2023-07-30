import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import logos from '../../styles/Logos.module.css';
import styles from '../../styles/buttons.module.css';
import flex from '../../styles/Flexible.module.css';

const TaskTableRow = ({ task }) => {
  // Function to handle editing a task
  const handleEditTask = () => {
    // Implement your edit functionality here
  };

  // Function to handle deleting a task
  const handleDeleteTask = () => {
    // Implement your delete functionality here
  };

  return (
    <TableRow>
      <TableCell>{task.taskName}</TableCell>
      <TableCell>{task.status}</TableCell>
      <TableCell>{task.assignedTo}</TableCell>
      <TableCell>{task.dueDate}</TableCell>
      <TableCell>
        <IconButton
          className={styles.editButton} // Apply your edit button styles here
          onClick={handleEditTask}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className={styles.deleteButton} // Apply your delete button styles here
          onClick={handleDeleteTask}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TaskTableRow;
