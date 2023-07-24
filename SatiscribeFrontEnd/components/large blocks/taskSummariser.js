import React, { useState, useEffect } from 'react'
import color from '@/styles/Colourtest.module.css'
import list from '@/styles/List.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import TaskSummariserDropDown from './taskSummariserDropDown'
import InputFieldEditable from './inputFieldEditable'
import InputFieldEditablePara from './inputFieldEditablePara'




function TaskSummariserBlock({ editable }) {

    const initialSentences = [
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Sentence 1' },
        { id: 3, text: 'Sentence 2' },
        { id: 4, text: 'Sentence 3' },
    ];


    const [sentences, setSentences] = useState(initialSentences);
    const [editMode, setEditMode] = useState(false)
    const [editedSentences, setEditedSentences] = useState(initialSentences);
    const [warning, setWarning] = useState(false)
    const [warningMessage, setWarningMessage] = useState('')

    useEffect(() => {
        setWarning(editedSentences.some(agenda => agenda.text.length === 0));
        console.log(editedSentences)
        if (editedSentences.some(agenda => agenda.text.length === 0)) {
            setWarningMessage("Input Fields Cannot Be Left Blank")
        };

    }, [editedSentences])

    function handleInputChange(event, id) {
        const newText = event.target.value;
        setEditedSentences(prevAgendas => prevAgendas.map(agenda => agenda.id === id ? { ...agenda, text: newText } : agenda));
    }

    function deleteData(id) {
        const nonEmptyyAgendas = editedSentences.filter(agenda => agenda.text.trim() !== '')
        if (nonEmptyyAgendas.length > 2) {
            setEditedSentences(prevEditedAgendas => prevEditedAgendas.filter(agenda => agenda.id !== id));
        } else {
            setWarning(true)
            setWarningMessage('You Can"t Have A Task with no details!')
        }
    }

    const startEditing = () => {
        setEditMode(true);
    };

    const saveEditing = () => {
        setEditMode(false);
        setSentences(editedSentences)
    }

    const discardEditing = () => {
        setEditMode(false);
        setEditedSentences(sentences)
    }

    return (
        <>
            {editable ? (
                <div className={`${contentblock.largeBlockContainerNoHover}`}>
                    <div className={`${flexi.innerMargin}  ${contentblock.contentBlockAlignment}`}>
                        <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                            <h5>Task Summariser & Assigner</h5>
                            {editMode ? (
                                <div className={flexi.flexRowSmolGap}>
                                    <div className={logos.small} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }} onClick={() => saveEditing()}></div>
                                    <div className={logos.small} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1 }} onClick={() => discardEditing()}></div>
                                </div>
                            ) : (
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }} onClick={() => startEditing()}></div>
                            )
                            }
                        </div>
                        {warning && (
                            <div className={`${flexi.flexRowNoGap} ${flexi.justifyStart} ${flexi.alignCenter}`} >
                                <div className={logos.medium} style={{ backgroundImage: `url("/icons/Caution.png")`, zIndex: 1 }} onClick={startEditing}></div>
                                <h6 style={{ color: `var(--Final_Red)` }}>{warningMessage}</h6>
                            </div>
                        )}
                        {editMode ? (
                            <div style={{ marginBottom: -30 }}>
                                <InputFieldEditablePara
                                    key={editedSentences[0].id}
                                    Text={editedSentences[0].text}
                                    onChange={event => handleInputChange(event, editedSentences[0].id)}
                                    onDelete={() => deleteData(editedSentences[0].id)}
                                />
                            </div>) : (
                            <div style={{ marginBottom: -30 }}>
                                <p style={{ color: `var(--Final_White)` }}>{editedSentences[0].text}</p>
                                <div className={contentblock.line}></div>
                            </div>
                        )}
                        {editMode ? (
                            <ul className={`${list.mediumGap}`}>
                                {editedSentences.slice(1).map(sentence => (
                                    <InputFieldEditable
                                        key={sentence.id}
                                        Text={sentence.text}
                                        onChange={event => handleInputChange(event, sentence.id)}
                                        onDelete={() => deleteData(sentence.id)}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <ul className={`${list.mediumGap}`}>
                                {editedSentences.slice(1).map(sentence => (
                                    <li key={sentence.id}>
                                        <p style={{ color: `var(--Final_White)` }}>{sentence.text}</p>
                                        <div className={contentblock.line}></div>
                                    </li>
                                ))}
                            </ul>
                        )
                        }
                        <TaskSummariserDropDown clickable={true} />

                    </div>
                </div>
            ) : (
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
            )}
        </>
    )
}

export default TaskSummariserBlock