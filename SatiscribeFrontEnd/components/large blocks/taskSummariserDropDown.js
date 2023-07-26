import React, { useEffect } from 'react'
import { useState } from 'react'
import contentblock from '@/styles/components/contentblocks.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'

function TaskSummariserDropDown({ clickable, onClick, dataset, resetDropDown }) {

    const backgroundColors = [`var(--Final_Component_Dark_Grey)`, `var(--Final_Component_Lighter_Grey)`]; // Define an array of background colors
    const [dropDown, setDropDown] = useState(false)
    const [memberList, setMemberList] = useState()
    const [effectRan, setEffectRan] = useState(false)


    const toggleDropDown = () => {
        setDropDown((prevDropDown) => !prevDropDown);
    };


    useEffect(() => {
        console.log(clickable, dataset)
        const fetchMemberList = async () => {
            if (clickable) {
                setMemberList(Object.keys(dataset))
                console.log(memberList)
            }

            else {
            }
            setEffectRan(true)
            console.log(effectRan)
        };
        fetchMemberList();
    }, [dataset]);

    useEffect(() => {
        const resetDropDown = () => {
            setDropDown(false)
        };
        resetDropDown();
    }, [resetDropDown]);

    return (
        <>
            {effectRan &&
                <div>
                    {clickable ?
                        (<div onClick={toggleDropDown} >
                            <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                                <div className={flexi.flexRowSmolGap}>
                                    <p style={{ color: `var(--Final_White)` }}> Assign Task To</p>
                                    {memberList.filter((member) => dataset[member]).map((selectedMember) => (
                                        <img
                                            key={selectedMember}
                                            src="/profiles/Profile Pict (Cream).png"
                                            alt="Selected Member"
                                            className={logos.small}
                                            style={{ zIndex: 1 }}
                                        />))}
                                </div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                            </div>
                            <div className={contentblock.line}></div>
                        </div>
                        ) : (
                            <div >
                                <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                                    <div className={flexi.flexRowSmolGap}>
                                        <p style={{ color: `var(--Final_White)` }}> Assign Task To</p>
                                    </div>
                                    <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                                </div>
                                <div className={contentblock.line}></div>
                            </div>
                        )}


                    {dropDown && (<div style={{ border: '4px solid', borderTop: 'none', borderColor: `var(--Final_Black)` }}>
                        {memberList.map((member, index) => (
                            <div
                                key={member}
                                className={`${flexi.spacing} ${dataset[member] ? 'flexi.inLine' : ''}`}
                                style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}
                                onClick={() => onClick(member)}>

                                <div className={`${flexi.flexRowSmolGap} ${contentblock.clickable}`}>
                                    <div className={logos.small} style={{ backgroundImage: `url(${dataset[member] ? '/icons/CheckboxTicked.png' : '/icons/Checkbox.png'})`, zIndex: 1 }}></div>
                                    <div className={logos.small} style={{ backgroundImage: `url("/profiles/Profile Pict (Cream).png")`, zIndex: 1 }}></div>
                                    <p style={{ color: `var(--Final_White)` }}>{member}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            }
        </>
    )
}

export default TaskSummariserDropDown