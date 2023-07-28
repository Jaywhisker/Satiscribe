import React, { useState, useEffect } from 'react'
import color from '@/styles/Colourtest.module.css'
import list from '@/styles/List.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import TaskSummariserDropDown from './taskSummariserDropDown'
import InputFieldEditableSentence from '../InputFields/inputFieldEditableSentence'
import InputFieldEditablePara from '../InputFields/inputFieldEditablePara'
import InputFieldEditable from '../InputFields/inputFieldEditableList'




function IndividualTask({data, editMode, onChange, onDelete, onClick, membername, resetDropDown}) {

    const TaskData = data.task
    
    return (
        <>
            <div className={flexi.flexColumnSmolGap}>
                {editMode ? (
                    <div className={`${flexi.flexColumnSmolGap}`}>
                        
                        <InputFieldEditableSentence
                            Text={TaskData.taskname}
                            onChange={(event) => onChange(event, "taskname")}
                            onDelete={() => onDelete(data.id)}
                            placeholder="New Task Name"
                            deletable={true}
                        />
                        <InputFieldEditablePara
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