import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './customTheme';
import { LogoButton } from '../';
import { CustomMaterialPagination } from './custompaginationcomponent';
import styles from '../../styles/Table.module.css';


const TaskDataTable = ({
  projectData,
  members,
  tasks,
  projectname,
  handleEditTask,
  handleDeleteTask,
  showAddTask,
  sortColumn,
  sortDirection,
  handleSort,
  newTaskData,
  setNewTaskData,
  setShowAddTask,
  handleAddTask,
  setShowAddNewRow,
  showAddNewRow,
  setShowAddTaskInput,
  showAssignedToColumn,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(projectData)

  const columns = [
    {
      name: 'Task',
      selector: 'task_details.task_name',
      sortable: false,
    },
    {
      name: 'Status',
      selector: 'task_details.status',
      sortable: true,
      cell: (row) => (
        <div className={row?.task_details?.status?.toLowerCase()}>
          {row?.task_details?.status}
        </div>
      ),
    },
    {
      name: showAssignedToColumn ? 'Assigned To' : 'Project',
      selector: showAssignedToColumn ? 'task_details.assigned_to' : 'projectname', // Use 'projectname' to get the project name
      sortable: false,
      cell: (row) => {
        if (showAssignedToColumn) {
          const assignedTo = row?.task_details?.assigned_to || [];
          const assignedToNames = assignedTo.join(', ');
          return <div>{assignedToNames}</div>;
        } else {
          const projectName = row?.task_details?.project || " ";
          return <div>{projectName}</div>;
        }
      },
    },
    {
      name: 'Due Date',
      selector: 'task_details.duedate',
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div style={{ display: 'flex' }}>
          <LogoButton
            onClick={() => handleEditTask(row.id)}
            logoSize="small"
            logoStyle={{ backgroundImage: `url("/icons/Edit.png")` }}
            disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Edit.png")` }}
            disabled={true}
          />
          <LogoButton
            onClick={() => handleDeleteTask(row.id)}
            logoSize="small"
            logoStyle={{ backgroundImage: `url("/icons/Trash.png")` }}
            disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Trash.png")` }}
            disabled={true}
          />
        </div>
      ),
    },
  ];

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.task_details.task_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const customStyles = {
    title: {
      style: {
        fontFamily: 'Lato, sans-serif', // Set the font family for the title
        fontSize: '3vh', // Set the font size for the title
      },
    },
    rows: {
      style: {
        backgroundColor: 'var(--Final_Component_Dark_Grey)',
        '&:nth-of-type(odd)': {
          backgroundColor: 'var(--Final_Component_Lighter_Grey)',
        },
        fontFamily: 'Lato, sans-serif', // Set the font family for the DataTable content
        fontSize: '3vh', // Set the font size for the DataTable content
        fontWeight: 400, // Set the font weight for the DataTable content
        lineHeight: '4vh', // Set the line height for the DataTable content
        height: '9vh',

      },
    },
    headCells: {
      style: {
        backgroundColor: 'var(--Final_Component_Dark_Grey)',
        color: 'var(--Final_Light_Purple)',
        fontFamily: 'Lato, sans-serif',
        fontSize: '3vh',
        height: '10vh',
        width: '100%',
        border: 'none',
      },
    },
    cells: {
      style: {
        color: 'var(--Final_White)',
        width: '100%',
      },
    },
    pagination: {
      style: {
        display: 'flex',
        fontSize: '3vh',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: 'var(--Final_Component_Dark_Grey)', // Dark grey background for pagination
        color: 'var(--Final_White)', // White text for pagination
        fontFamily: 'Lato, sans-serif',
        position: 'sticky',
        bottom: 0, // Stick the pagination at the bottom
        zIndex: 1, // Ensure it appears above the DataTable
      },
    },
  };

  const compareDates = (a, b) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();

    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  };

  const sortDates = (data, field) => {
    return data.sort((a, b) => {
      return compareDates(a.task_details[field], b.task_details[field]);
    });
  };


  const handleDateSort = (column, sortDirection) => {
    if (column.selector === 'task_details.duedate') {
      if (sortDirection === 'asc' && !isDatesAscending()) {
        handleSort(column, 'desc');
      } else if (sortDirection === 'desc' && !isDatesDescending()) {
        handleSort(column, 'asc');
      } else {
        handleSort(column, sortDirection);
      }
    } else {
      handleSort(column, sortDirection);
    }
  };

  const isDatesAscending = () => {
    for (let i = 1; i < tasks.length; i++) {
      if (
        compareDates(tasks[i - 1].task_details.duedate, tasks[i].task_details.duedate) > 0
      ) {
        return false;
      }
    }
    return true;
  };

  const isDatesDescending = () => {
    for (let i = 1; i < tasks.length; i++) {
      if (
        compareDates(tasks[i - 1].task_details.duedate, tasks[i].task_details.duedate) < 0
      ) {
        return false;
      }
    }
    return true;
  };

  const addNewTaskRowData = {
    task_id: 'add-new-task-row', // Unique ID for the Add New Task row
    task_details: {
      task_name: '+ Add New Task',
      status: '',
      assigned_to: '',
      duedate: '',
    },
  };


  const noDataComponent = (
    <div>
      {filteredTasks.length === 0 ? (
        <div>No relevant results found.</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

  const clearSearch = () => {
    setSearchTerm('');
  };


  return (
    <div>
      <div className={styles.searchPlace}>
        <input className={styles.searchBar}
          type="text"
          placeholder="Search for tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <LogoButton
          onClick={clearSearch}
          logoSize="medium"
          logoStyle={{ backgroundImage: `url("/icons/Replace.png")` }}
          disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Replace.png")` }}
          disabled={false}
        />
      </div>

      <DataTable
        columns={columns}
        data={sortDates([...filteredTasks, ...(showAddTask ? [addNewTaskRowData] : [])], sortColumn)}
        theme="custom"
        customStyles={customStyles}
        progressPending={filteredTasks.length === 0}
        progressComponent={noDataComponent}
        sortIcon={<span>&darr;&uarr;</span>}
        onSort={handleDateSort}
        sortField={sortColumn}
        sortDirection={sortDirection}
        noHeader={true}
        dense={true}
        pagination
        paginationPerPage={5}
        denseStyle={{
          background: 'var(--Final_Component_Lighter_Grey)',
        }}
        denseTabletStyle={{
          background: 'var(--Final_Component_Lighter_Grey)',
        }}
        noDataComponent={tasks.length === 0 && <div>No data available</div>}
        paginationComponent={(props) => (
          <CustomMaterialPagination
            {...props}
            members={members}
            totalRows={tasks.length}
            setShowAddTaskInput={setShowAddTaskInput} // Pass the setShowAddTaskInput function
            setShowAddTask={setShowAddTask}
            newTaskData={newTaskData}
            setNewTaskData={setNewTaskData}
            handleAddTask={handleAddTask}
            setShowAddNewRow={setShowAddNewRow}
            showAddNewRow={showAddNewRow}
          />
        )}

      />
    </div>
  );
};

export default TaskDataTable;
