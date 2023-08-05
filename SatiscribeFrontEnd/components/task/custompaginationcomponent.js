import React from 'react';
import TaskDataTable from './tasktable';
import AddNewTaskInput from './addnewtaskinput';
import styles from '../../styles/Table.module.css';
import Button from '../buttons/button';


const CustomMaterialPagination = ({
  members,
  rowsPerPage,
  totalRows,
  onChangePage,
  onChangeRowsPerPage,
  currentPage,
  showAddNewRow,
  setShowAddNewRow,
  newTaskData,
  setNewTaskData,
  handleAddTask,
  setShowAddTask,
  // setShowAddTaskInput,
}) => {
  const handlePageChange = (newPage) => {
    onChangePage(newPage);
  };

  const isFirstPage = currentPage === 1;
  // console.log("SIG", totalRows, rowsPerPage);
  const isLastPage = currentPage === Math.ceil(totalRows / rowsPerPage);


  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    onChangeRowsPerPage(newRowsPerPage, currentPage);
  };

  const handleAddNewTask = () => {
    // setShowAddNewRow(!showAddNewRow);
    // setShowAddTaskInput(!showAddNewRow); // Use setShowAddTaskInput here
    setShowAddNewRow(true);
    console.log("SHOW ADD", showAddNewRow);
    if (!showAddNewRow) {
      setNewTaskData({
        task_name: '',
        status: '',
        assigned_to: [],
        duedate: '',
      });
    }
  };

  return (
    <div>
      {showAddNewRow ? (
        <div className={styles.addNewTaskRow}>
          <AddNewTaskInput
            newTaskData={newTaskData}
            setNewTaskData={setNewTaskData}
            members={members}
            handleAddTask={(newTask) => {
              handleAddTask(newTask);
              // setShowAddNewRow(false);
            }}
            setShowAddTask={setShowAddTask}

          />
        </div>
      ) : (
        <div className={styles.addNewTaskRow} onClick={handleAddNewTask}>
          <p>
            + Add New Task
          </p>

        </div>
      )}

      <div className={styles.paginationContainer}>
        <div className={styles.showEntries}>
          <p>Show</p>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className={styles.entriesDropdown}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <p>entries</p>
        </div>

        <div className={styles.paginationButtons}>
          <p
            onClick={() => !isFirstPage && handlePageChange(currentPage - 1)}
            style={{
              cursor: isFirstPage ? 'default' : 'pointer',
              color: isFirstPage ? 'var(--Final_Component_Lighter_Grey)' : 'var(--Final_Light_Purple)',
            }}
          >
            Previous
          </p>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => handlePageChange(parseInt(e.target.value))}
            className={styles.currentPageInput}
          />
          <p
            onClick={() => !isLastPage && handlePageChange(currentPage + 1)}
            style={{
              cursor: isLastPage ? 'default' : 'pointer',
              color: isLastPage ? 'var(--Final_Component_Lighter_Grey)' : 'var(--Final_Light_Purple)',
            }}
          >
            Next
          </p>
        </div>
      </div>
    </div>
  );
};

export { CustomMaterialPagination };