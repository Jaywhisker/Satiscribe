import React, { useState, useEffect } from 'react'
import color from '@/styles/Colourtest.module.css'
import list from '@/styles/List.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import TaskSummariserDropDown from './taskSummariserDropDown'
import InputFieldEditableSentence from './inputFieldEditableSentence'
import InputFieldEditablePara from './InputFieldEditablePara'
import InputFieldEditable from './inputFieldEditable'




function IndividualTask({data, editMode, onChange, onDelete, onClick, membername, resetDropDown}) {

    // const initialSentences = [
    //     { id: 1, text: 'Task' },
    //     { id: 2, text: 'Details' },
    // ];

    // useEffect(() => {
    //     // This function will be executed whenever editMode changes
    //     if (editMode.save) {
    //         // Perform action when editMode becomes true
    //         setSentences(editedSentences)
    //     } else {
    //         // Perform action when editMode becomes false
    //         setEditedSentences(sentences)
    //     }
    // }, [editMode]);


    // const [sentences, setSentences] = useState(initialSentences);
    // const [editedSentences, setEditedSentences] = useState(initialSentences);
    // const [warning, setWarning] = useState(false)
    // const [warningMessage, setWarningMessage] = useState('')

    // useEffect(() => {
    //     setWarning(editedSentences.some(agenda => agenda.text.length === 0));
    //     if (editedSentences.some(agenda => agenda.text.length === 0)) {
    //         setWarningMessage("Input Fields Cannot Be Left Blank")
    //         onScreamingChange(true)
    //     } else {
    //         onScreamingChange(false)
    //     };

    // }, [editedSentences])

    // function handleInputChange(event, id) {
    //     const newText = event.target.value;
    //     setEditedSentences(prevAgendas => prevAgendas.map(agenda => agenda.id === id ? { ...agenda, text: newText } : agenda));
    // }

    // function deleteData(id) {
    //     const nonEmptyyAgendas = editedSentences.filter(agenda => agenda.text.trim() !== '')
    //     if (nonEmptyyAgendas.length > 2) {
    //         setEditedSentences(prevEditedAgendas => prevEditedAgendas.filter(agenda => agenda.id !== id));
    //         onScreamingChange(false)
    //     } else {
    //         setWarning(true)
    //         setWarningMessage('You Can"t Have A Task with no details!')
    //         onScreamingChange(true)
    //     }
    // }

    // function addTask() {
    //     const newId = editedSentences.length > 0 ? Math.max(...editedSentences.map(item => item.id)) + 1 : 1;
    //     const newAgenda = { id: newId, text: '' };
    //     setEditedSentences(prevEditedAgendas => [...prevEditedAgendas, newAgenda]);
    // }

    const TaskData = data.task
    return (
        <>
            <div className={flexi.flexColumnSmolGap}>
                {editMode ? (
                    <div className={`${flexi.flexColumnSmolGap}`}>
                        <InputFieldEditableSentence
                            //key={data.id}
                            Text={TaskData.taskname}
                            onChange={(event) => onChange(event, "taskname")}
                            onDelete={() => onDelete(data.id)}
                            placeholder="New Task Name"
                        />
                        <InputFieldEditablePara
                            //key={data.id}
                            Text={TaskData.details}
                            onChange={(event) => onChange(event, "details")}
                            placeholder="Task Details"
                        />
                    </div>
                ) : (
                    <div className={`${flexi.flexColumnSmolGap}`}>
                        <div>
                            <p style={{ color: `var(--Final_White)` }}>{TaskData.taskname}</p>
                            <div className={contentblock.line}></div>
                        </div>
                        <div style={{ width: `100%`, height: `fit-content` }}>
                            <p style={{ color: `var(--Final_White)` }}>{TaskData.details}</p>
                            <div className={contentblock.line}></div>
                        </div>
                    </div>

                )}
                <div style={{ marginTop: 15, marginBottom: 30 }}>
                    <TaskSummariserDropDown 
                        clickable={true} 
                        onClick={(membername) => onClick(membername)} 
                        dataset= {data.task.members}
                        resetDropDown={resetDropDown}
                        />
                </div>
            </div>
        </>
    )
}

export default IndividualTask