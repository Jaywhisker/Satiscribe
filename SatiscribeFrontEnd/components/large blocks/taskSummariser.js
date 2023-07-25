import React, { useState, useEffect } from 'react'
import color from '@/styles/Colourtest.module.css'
import list from '@/styles/List.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import IndividualTask from './taskSummariserIndividualTask'
import TaskSummariserDropDown from './taskSummariserDropDown'




function TaskSummariserBlock({ editable }) {
    const [editMode, setEditMode] = useState({ edit: false, save: false })
    const [tasks, setTasks] = useState([{ id: 1, screaming: false }]);


    const startEditing = () => {
        setEditMode({ edit: true, save: false });
    };

    const saveEditing = () => {
        const isAnyScreaming = tasks.some((task) => task.screaming);
        if (!isAnyScreaming) {
            setEditMode({ edit: false, save: true });

        }
    }

    const discardEditing = () => {
        setEditMode({ edit: false, save: false });
    }

    const addTask = () => {
        const newTask = {
            id: tasks.length + 1, // Assign a unique ID to each task (you can use a library like uuid to generate unique IDs)
            screaming: false
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };
    const handleTaskScreamingChange = (taskId, screaming) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, screaming } : task
            )
        );
    };

    return (
        <>
            {editable ? (
                <div className={`${contentblock.largeBlockContainerNoHover}`}>
                    <div className={`${flexi.innerMargin}  ${contentblock.contentBlockAlignmentSpecial}`}>
                        <div className={`${flexi.flexRowMediumGap} ${flexi.justifySpaceBetween}`}>
                            <h5>Task Summariser & Assigner</h5>
                            {editMode.edit ? (
                                <div className={flexi.flexRowSmolGap}>
                                    <div className={logos.small} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }} onClick={() => saveEditing()}></div>
                                    <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} onClick={() => discardEditing()}></div>
                                </div>
                            ) : (
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }} onClick={() => startEditing()}></div>
                            )
                            }
                        </div>
                        {tasks.map((task) => (
                            <IndividualTask id={task.id} editMode={editMode} onScreamingChange={(screaming) => handleTaskScreamingChange(task.id, screaming)} />
                        ))}

                        {editMode.edit ? (
                            <div className={`${contentblock.largeBlockButton} ${flexi.justifyCenter} ${flexi.flexRowSmolGap}`} onClick={() => addTask()}>
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
                            <TaskSummariserDropDown clickable={false} />

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TaskSummariserBlock