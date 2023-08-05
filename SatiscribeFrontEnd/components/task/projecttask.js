import React, { useState, useEffect } from 'react';
import TaskDataTable from './tasktable';


const ProjectTask = ({ projectData, showAssignedToColumn, projectnum }) => {
  const [tasks, setTasks] = useState([]);
  const [members, setMembers] = useState([]);
  const [projectname, setProjectName] = useState([]);
  const [sortColumn, setSortColumn] = useState('task_details.duedate');
  const [sortDirection, setSortDirection] = useState('asc');
  const [newTaskData, setNewTaskData] = useState({
    task_name: '',
    assigned_to: [],
    status: '',
    duedate: '',
  });

  useEffect(() => {
    if (showAssignedToColumn) {
      if (projectnum !== null && projectData.length > projectnum) {
        const selectedProject = projectData[projectnum];
        setTasks(selectedProject?.project_details?.task_list || []);
        setMembers(selectedProject?.project_details?.members || []);
        // Extract project names from the projectData array
        const names = projectData.map((project) => project.project_name);
        setProjectName(names);
      }
    } else {
      setTasks(projectData.task_list || []);
      setMembers([]);
      setProjectName([]);
    }
  }, [projectData, projectnum, showAssignedToColumn]);


  // console.log("project name!", projectname)

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddTask(false);
  };

  // const handleEditTask = (id) => {
  //   // Find the task with the given ID in the tasks array
  //   const taskToEdit = tasks.find((task) => task.id === id);
  //   if (taskToEdit) {
  //     setNewTaskData({ ...taskToEdit.task_details });
  //     setShowAddNewRow(true);
  //   }
  // };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleShowAddNewTaskInput = () => {
    setShowAddTask(true);
  };

    // Define the state for showAddTask and setShowAddTask
    const [showAddTask, setShowAddTask] = useState(false);

    // Define the state for setShowAddTaskInput
    const [setShowAddTaskInput, setSetShowAddTaskInput] = useState(false);

    // Define the state for whether the new input row will be shown
    const [showAddNewRow, setShowAddNewRow] = useState(false);


    console.log("SHOW ASSIGN?", showAssignedToColumn)

  return (
    <div>
      <TaskDataTable
        projectData={projectData}
        members={members}
        tasks={tasks}
        projectname={projectname}
        // handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        handleSort={(column, direction) => {
          setSortColumn(column.selector);
          setSortDirection(direction);
        }}
        setShowAddTask={setShowAddTask}
        setNewTaskData={setNewTaskData}
        setShowAddNewRow={setShowAddNewRow}
        showAddNewRow={showAddNewRow}
        newTaskData={newTaskData}
        showAssignedToColumn={showAssignedToColumn}
      />
    </div>
  );
};

export default ProjectTask;

