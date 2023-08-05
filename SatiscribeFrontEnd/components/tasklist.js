import { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from '../styles/Tasklist.module.css';
import taskData from '../json/home_test.json';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TaskListStyled = styled.div`
  width: 70vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  overflow-x: hidden;
`;

const TableHeader = styled.thead`
  th {
    background-color: #444;
    padding: 8px;
  }
`;

const TableBody = styled.tbody``;

const TableFooter = styled.tfoot`
  th {
    background-color: #444;
    padding: 8px;
  }
`;

const TaskItemStyled = styled.div`
  padding: 10px 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ShowEntries = styled.span`
  color: #bbb;
  cursor: pointer;
`;

const SearchBar = styled.input`
  padding: 6px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  color: #fff;
  background-color: #444;
  width: 180px;

  &::placeholder {
    color: #bbb;
  }
`;

const EditableCell = styled.td`
  select {
    background-color: #444;
    color: #fff;
    border: none;
  }
`;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [addingTask, setAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    task_name: '',
    project: '',
    status: 'Not Started',
    duedate: '',
    editMode: true,
  });

  useEffect(() => {
    setTasks(taskData.task_list);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowEntriesChange = (event) => {
    setShowEntries(Number(event.target.value));
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.task_details.task_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const slicedTasks = filteredTasks.slice(0, showEntries);

  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleSaveTask = () => {
    setTasks((prevTasks) => [...prevTasks, { task_id: prevTasks.length + 1, task_details: newTask }]);
    setNewTask({
      task_name: '',
      project: '',
      status: 'Not Started',
      duedate: '',
      editMode: true,
    });
    setAddingTask(false);
  };

  const handleCancelAddTask = () => {
    setNewTask({
      task_name: '',
      project: '',
      status: 'Not Started',
      duedate: '',
      editMode: true,
    });
    setAddingTask(false);
  };

  return (
    <CenteredContainer>
      <TaskListStyled>
        <table className={styles.taskListTable}>
          <TableHeader>
            <tr>
              <th>Task Name</th>
              <th>Project</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </TableHeader>
          <tbody>
            <tr>
              <td colSpan="5">
                <SearchContainer>
                  <ShowEntries>
                    Show
                    <select value={showEntries} onChange={handleShowEntriesChange}>
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    entries
                  </ShowEntries>
                  <SearchBar
                    type="text"
                    placeholder="Search tasks"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </SearchContainer>
              </td>
            </tr>
          </tbody>
          <TableBody>
            {slicedTasks.map((item, index) => (
              <tr key={item.task_id} className={styles.projectcontainer}>
                <td>
                  {item.editMode ? (
                    <input
                      type="text"
                      value={item.task_details.task_name}
                      onChange={(e) => {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].task_details.task_name = e.target.value;
                        setTasks(updatedTasks);
                      }}
                    />
                  ) : (
                    item.task_details.task_name
                  )}
                </td>
                <td>
                  {item.editMode ? (
                    <input
                      type="text"
                      value={item.task_details.project}
                      onChange={(e) => {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].task_details.project = e.target.value;
                        setTasks(updatedTasks);
                      }}
                    />
                  ) : (
                    item.task_details.project
                  )}
                </td>
                <EditableCell>
                  {item.editMode ? (
                    <select
                      value={item.task_details.status}
                      onChange={(e) => {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].task_details.status = e.target.value;
                        setTasks(updatedTasks);
                      }}
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Not Started">Not Started</option>
                    </select>
                  ) : (
                    item.task_details.status
                  )}
                </EditableCell>
                <td>
                  {item.editMode ? (
                    <input
                      type="text"
                      value={item.task_details.duedate}
                      onChange={(e) => {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].task_details.duedate = e.target.value;
                        setTasks(updatedTasks);
                      }}
                    />
                  ) : (
                    item.task_details.duedate
                  )}
                </td>
                <td>
                  {item.editMode ? (
                    <>
                      <button
                        onClick={() => {
                          const updatedTasks = [...tasks];
                          updatedTasks[index].editMode = false;
                          setTasks(updatedTasks);
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          const updatedTasks = [...tasks];
                          updatedTasks.splice(index, 1);
                          setTasks(updatedTasks);
                        }}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        const updatedTasks = [...tasks];
                        updatedTasks[index].editMode = true;
                        setTasks(updatedTasks);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </TableBody>
          <TableFooter>
            {addingTask && (
              <tr>
                <td>
                  <input
                    type="text"
                    value={newTask.task_name}
                    onChange={(e) => setNewTask({ ...newTask, task_name: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newTask.project}
                    onChange={(e) => setNewTask({ ...newTask, project: e.target.value })}
                  />
                </td>
                <EditableCell>
                  <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Not Started">Not Started</option>
                  </select>
                </EditableCell>
                <td>
                  <input
                    type="text"
                    value={newTask.duedate}
                    onChange={(e) => setNewTask({ ...newTask, duedate: e.target.value })}
                  />
                </td>
                <td colSpan="2">
                  <button onClick={handleSaveTask}>Save</button>
                  <button onClick={handleCancelAddTask}>Cancel</button>
                </td>
              </tr>
            )}
          </TableFooter>
        </table>
      </TaskListStyled>
    </CenteredContainer>
  );
};

export default TaskList;