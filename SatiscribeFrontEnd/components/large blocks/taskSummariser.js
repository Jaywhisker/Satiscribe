import React, { useState, useEffect } from 'react'
import color from '@/styles/Colourtest.module.css'
import list from '@/styles/List.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import IndividualTask from './taskSummariserIndividualTask'
import TaskSummariserDropDown from './taskSummariserDropDown'




function TaskSummariserBlock({ editable }) {

    const initialtaskData = [
        {
            "id": 1,
            "task": {
                "taskname": "task 1",
                "details": "summary of task 1",
                "members": {
                    "derrick": false,
                    "hubob": false,
                    "jefferson": false,
                    "morgan": false
                }
            }
        },
        {
            "id": 2,
            "task": {
                "taskname": "task 2",
                "details": "summary of task 2",
                "members": {
                    "derrick": false,
                    "hubob": false,
                    "jefferson": false,
                    "morgan": false
                }
            }
        }
    ]

    const [taskData, setTaskData] = useState(initialtaskData)
    const [editingData, setEditingData] = useState(initialtaskData)
    const [warning, setWarning] = useState(false)
    const [warningMessage, setWarningMessage] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [resetDropDown, setResetDropDown] = useState(false)

    useEffect(() => {
        setWarning(
            editingData.some(taskdata => taskdata.task.taskname.length === 0) ||
            editingData.some(taskdata => taskdata.task.details.length === 0)
        );
        if (
            editingData.some(taskdata => taskdata.task.taskname.length === 0) ||
            editingData.some(taskdata => taskdata.task.details.length === 0)
        ) {
            setWarningMessage("Input Fields Cannot Be Left Blank");
        }

    }, [editingData]);



    const startEditing = () => {
        setEditMode(true);
        setResetDropDown(!resetDropDown);
    };

    const saveEditing = () => {
        if (warningMessage != 'Input Fields Cannot Be Left Blank') {
            setEditMode(false);
            setTaskData(editingData);
            setResetDropDown(!resetDropDown);
            setWarning(false)
        }
    }

    const discardEditing = () => {
        setEditMode(false);
        setEditingData(taskData);
        setWarning(false);
        setResetDropDown(!resetDropDown);
    }

    const addTask = () => {
        const newTask = { id: taskData.length + 1 };
        const membersList = initialtaskData[0]['task']['members']
        const default_data = { 'taskname': '', 'details': '', 'members': membersList }
        newTask['task'] = default_data
        setEditingData((editingData) => [...editingData, newTask]);
    };

    const handleTextChange = (event, field, id) => {
        const newText = event.target.value;
        if (field === 'taskname') {
            setEditingData(prevTasks =>
                prevTasks.map(taskData =>
                    taskData.id === id
                        ? { ...taskData, task: { ...taskData.task, taskname: newText } }
                        : taskData
                )
            );
        } else if (field === 'details') {
            setEditingData(prevTasks =>
                prevTasks.map(taskData =>
                    taskData.id === id
                        ? { ...taskData, task: { ...taskData.task, details: newText } }
                        : taskData
                )
            );
        }
    }
    const handleMemberUpdate = (membername, id) => {
        setEditingData((prevTasks) =>
            prevTasks.map((taskData) =>
                taskData.id === id
                    ? {
                        ...taskData,
                        task: {
                            ...taskData.task,
                            members: {
                                ...taskData.task.members,
                                [membername]: !taskData.task.members[membername],
                            },
                        },
                    }
                    : taskData
            )
        );
    };

    const deleteData = (id) => {
        const nonEmptyInputFields = editingData.filter(taskData => taskData.task.taskname.trim() !== '' | taskData.task.details.trim() !== '')
        if (nonEmptyInputFields.length > 1) {
            setEditingData(prevEditedTasks => prevEditedTasks.filter(taskData => taskData.id !== id));
        } else {
            setWarning(true)
            setWarningMessage('So free? Meeting for wat?')
        }
    }

    return (
        <>
            {editable ? (
                <div className={`${contentblock.largeBlockContainerNoHover}`}>
                    <div className={`${flexi.innerMargin}  ${contentblock.contentBlockAlignmentSpecial}`}>
                        <div className={`${flexi.flexRowMediumGap} ${flexi.justifySpaceBetween}`}>
                            <h5>Task Summariser & Assigner</h5>
                            {editMode ? (
                                <div className={flexi.flexRowSmolGap}>
                                    <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }} onClick={saveEditing}></div>
                                    <div className={logos.smallclickable} style={{ backgroundImage: `url("/iconsRed/Cancellation.png")`, zIndex: 1 }} onClick={discardEditing}></div>
                                </div>
                            ) : (
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }} onClick={startEditing}></div>
                            )}
                        </div>

                        {warning && (
                            <div className={`${flexi.flexRowNoGap} ${flexi.justifyStart} ${flexi.alignCenter}`} style={{marginBottom: -15, marginTop:-15}}>
                                <div className={logos.medium} style={{ backgroundImage: `url("/iconsRed/Caution.png")`, zIndex: 1 }}></div>
                                <h6 style={{ color: `var(--Final_Red)` }}>{warningMessage}</h6>
                            </div>
                        )}

                        {editingData.map((task) => (
                            <IndividualTask
                                key={task.id}
                                data={task}
                                editMode={editMode}
                                onChange={(event, field) => handleTextChange(event, field, task.id)}
                                onDelete={() => deleteData(task.id)}
                                onClick={(membername) => handleMemberUpdate(membername, task.id)}
                                resetDropDown={resetDropDown}
                            />
                        ))}

                        {editMode ? (
                            <div className={`${contentblock.largeBlockButton} ${flexi.justifyCenter} ${flexi.flexRowSmolGap}`} style={{ marginTop: 0 }} onClick={() => addTask()}>
                                <div className={logos.small} style={{ backgroundImage: `url("/icons/plusPurple.png")`, zIndex: 1, }}></div>
                                <p>Add Task</p>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            ) : (

                <div>
                    <div className={`${contentblock.largeBlockContainerNoHover}`}>
                        <div className={`${flexi.innerMargin}  ${contentblock.contentBlockAlignment}`}>
                            <h5>Task Summariser & Assigner</h5>

                            <div>
                                <div>
                                    <p style={{ color: `var(--Final_White)` }}> Task 1</p>
                                    <div className={contentblock.line}></div>
                                </div>
                            </div>
                            <ul className={list.smolGap} style={{ margin: '0px' }}>
                                <li>
                                    <p style={{ color: `var(--Final_White)` }}> Sentence 1 </p>
                                    <div className={contentblock.line}></div>
                                </li>
                                <li>
                                    <p style={{ color: `var(--Final_White)` }}> Sentence 2 </p>
                                    <div className={contentblock.line}></div>
                                </li>
                                <li>
                                    <p style={{ color: `var(--Final_White)` }}> Sentence 3 </p>
                                    <div className={contentblock.line}></div>
                                </li>
                            </ul>
                            <TaskSummariserDropDown clickable={false} isdropdown={resetDropDown} />

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TaskSummariserBlock