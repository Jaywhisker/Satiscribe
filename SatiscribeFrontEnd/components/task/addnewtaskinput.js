import React, { useState } from 'react';
import { LogoButton } from '../';
import { TaskDataTable } from '../';
import styles from '../../styles/Table.module.css';

const AddNewTaskInput = ({ newTaskData, setNewTaskData, handleAddTask, setShowAddTask, members, setShowAddNewRow }) => {
  const [assignedTo, setAssignedTo] = useState([]);
  const [enteredValue, setEnteredValue] = useState('');

  // Convert members to an array if it's an object
  const renderedMembers = Array.isArray(members)
    ? members
    : Object.values(members).filter((member) => typeof member === 'string');

  const handleSaveTask = () => {
    if (window.confirm('The function is currently disabled. Pressing confirm would end the testing of editing task functionality.')) {
      setShowAddNewRow=false;
      setShowAddTask=false;
      window.location.reload();
    }

  };

  const handleCancelTask = () => {
    if (window.confirm('Are you sure you want to discard this task?')) {
      setShowAddNewRow = false;
      setShowAddTask = false;
      window.location.reload();
    }
  };


  const formatSelectedMembers = (selectedMembers) => {
    return selectedMembers.join(', ') || ''; // Return an empty string if no members are selected
  };

  return (
    <div className={styles.inputrow}>
      <div className={styles.eachCol}>
        <input
          type="text"
          name="task_name"
          defaultValue={newTaskData.task_name}
          placeholder="Task Name"
          className={styles.taskInput}
          autoComplete="off"
        />
      </div>
      <div className={styles.eachCol}>
        <select
          name="status"
          defaultValue={newTaskData.status}
          className={styles.statusSelect} // Apply CSS class to style the dropdown
        >
          <option className={styles.optionPH} value="" disabled>Select Status</option>
          <option className={styles.optionSelect} value="Not Started">Not Started</option>
          <option className={styles.optionSelect} value="In Progress">In Progress</option>
          <option className={styles.optionSelect} value="Completed">Completed</option>
        </select>
      </div>
      <div className={styles.eachCol}>
        <input
          type="text"
          name="assigned_to"
          defaultValue={newTaskData.assigned_to}
          placeholder="Assigned To"
          className={styles.taskInput}
          autoComplete="off"
        // onChange={handleInputChange}
        />
      </div>
      <div className={styles.eachCol}>
        <input
          type="text"
          name="duedate"
          defaultValue={newTaskData.duedate} 
          placeholder="dd/mm/yyyy"
          className={styles.taskInput}
        //   onBlur={(e) => {
        //     const { name, value } = e.target;
        //     if (value !== '') {
        //       const date = new Date(value);
        //       const day = String(date.getDate()).padStart(2, '0');
        //       const month = String(date.getMonth() + 1).padStart(2, '0');
        //       const year = date.getFullYear();
        //       const formattedDate = `${day}/${month}/${year}`;
        //       setNewTaskData((prevData) => ({
        //         ...prevData,
        //         [name]: formattedDate,
        //       }));
        //     }
        //   }}
        />
      </div>
      <div className={styles.eachCol}>
        <div style={{ display: 'flex' }}>
          <LogoButton
            onClick={handleSaveTask}
            logoSize="small"
            logoStyle={{ backgroundImage: `url("/icons/Check.png")` }}
            disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Check.png")` }}
            disabled={false}
          />
          <LogoButton
            onClick={handleCancelTask}
            logoSize="small"
            logoStyle={{ backgroundImage: `url("/icons/Cancellation.png")` }}
            disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Cancellation.png")` }}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewTaskInput;
