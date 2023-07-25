import React, { useState, useEffect } from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import largeblockStyles from '@/styles/components/large blocks/createNewBlockStyles.module.css'
import InputFieldEditableList from './inputFieldEditableList'

function AgendaBlock() {

    const initialAgendas = [
        { id: 1, text: 'Agenda 1' },
        { id: 2, text: 'Agenda 2' },
        { id: 3, text: 'Agenda 3' },
    ];

    const [agendas, setAgendas] = useState(initialAgendas);
    const [editingState, setEditingState] = useState(false);
    const [editedAgendas, setEditedAgendas] = useState(initialAgendas);
    const [warning, setWarning] = useState(false)
    const [warningMessage, setWarningMessage] = useState('')


    useEffect(() => {
        setWarning(editedAgendas.some(agenda => agenda.text.length === 0));
        console.log(editedAgendas)
        if (editedAgendas.some(agenda => agenda.text.length === 0)) {
            setWarningMessage("Input Fields Cannot Be Left Blank")
        };

    }, [editedAgendas])


    function handleInputChange(event, id) {
        const newText = event.target.value;
        setEditedAgendas(prevAgendas => prevAgendas.map(agenda => agenda.id === id ? { ...agenda, text: newText } : agenda));
    }

    function saveEdits() {
        if (warning && warningMessage === "Input Fields Cannot Be Left Blank") {
            null;
        } else {
            setAgendas(editedAgendas);
            setEditingState(false);
            setWarning(false)
        }
    }

    function startEditing() {
        setEditingState(true);
    }

    function discardEdits() {
        setEditedAgendas(agendas)
        setEditingState(false);
        setWarning(false);
    }

    function deleteData(id) {
        const nonEmptyyAgendas = editedAgendas.filter(agenda => agenda.text.trim() !== '')
        if (nonEmptyyAgendas.length > 1) {
            setEditedAgendas(prevEditedAgendas => prevEditedAgendas.filter(agenda => agenda.id !== id));
        } else {
            setWarning(true)
            setWarningMessage('You Can"t Have A Meeting With No Purpose!')
        }
    }

    function addTask() {
        const newId = editedAgendas.length > 0 ? Math.max(...editedAgendas.map(item => item.id)) + 1 : 1;
        const newAgenda = { id: newId, text: '' };
        setEditedAgendas(prevEditedAgendas => [...prevEditedAgendas, newAgenda]);
    }


    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>
                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifyLeft}`}>
                        <h5>Agenda</h5>
                        <div className={logos.small} style={{ backgroundImage: `url("/iconsPurple50/Link.png")`, zIndex: 1 }}></div>
                        <h5 style={{ color: `var(--Final_Light_Purple_50)` }}>Task Summariser & Assigner</h5>
                    </div>

                    <ul className={`${list.mediumGap}`}>
                        <li> <p style={{ color: `var(--Final_White)` }}>Agenda 1</p></li>
                        <li> <p style={{ color: `var(--Final_White)` }}>Agenda 2</p></li>
                        <li> <p style={{ color: `var(--Final_White)` }}>Agenda 3</p></li>
                    </ul>

                </div>
            </div>



            {!editingState ? (
                <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                    <div className={`${flexi.innerMargin}`}>

                        <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                            <h5>Agenda</h5>
                            <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Edit.png")`, zIndex: 1 }} onClick={startEditing}></div>
                        </div>

                        <div>
                            <ul className={`${list.mediumGap}`}>

                                {agendas.map(agenda => (
                                    <li key={agenda.id}>
                                        <p style={{ color: `var(--Final_White)` }}>{agenda.text}</p>
                                        <div className={contentblock.line}></div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            ) : (
                <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                    <div className={`${flexi.innerMargin}`}>
                        <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                            <h5>Agenda</h5>
                            <div className={`${flexi.flexRowSmolGap}`}>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Check.png")`, zIndex: 1 }} onClick={saveEdits}></div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/iconsRed/Cancellation.png")`, zIndex: 1 }} onClick={discardEdits}></div>
                            </div>
                        </div>

                        {warning && (
                            <div className={`${flexi.flexRowNoGap} ${flexi.justifyStart} ${flexi.alignCenter}`} style={{ marginBottom: -30 }}>
                                <div className={logos.medium} style={{ backgroundImage: `url("/iconsRed/Caution.png")`, zIndex: 1 }}></div>
                                <h6 style={{ color: `var(--Final_Red)` }}>{warningMessage}</h6>
                            </div>
                        )}

                        <ul className={`${list.mediumGap}`}>
                            {editedAgendas.map(agenda => (
                                <InputFieldEditableList
                                    key={agenda.id}
                                    Text={agenda.text}
                                    onChange={event => handleInputChange(event, agenda.id)}
                                    onDelete={() => deleteData(agenda.id)}
                                    placeholder="New Agenda"
                                />
                            ))}
                        </ul>

                        <div className={`${contentblock.largeBlockButton} ${flexi.justifyCenter} ${flexi.flexRowSmolGap}`} onClick={addTask}>
                            <div className={logos.small} style={{ backgroundImage: `url("/icons/plusPurple.png")`, zIndex: 1, }}></div>
                            <p>Add Agenda</p>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default AgendaBlock