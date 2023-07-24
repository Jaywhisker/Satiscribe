import React from 'react'
import { useState } from 'react'
import contentblock from '@/styles/components/contentblocks.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'

function TaskSummariserDropDown({ clickable }) {

    const members = [
        { id: 1, name: 'Morgan', selected: false },
        { id: 2, name: 'Derrick', selected: false },
        { id: 3, name: 'Jefferson', selected: false },
    ];

    const backgroundColors = [`var(--Final_Component_Dark_Grey)`, `var(--Final_Component_Lighter_Grey)`]; // Define an array of background colors
    const [dropDown, setDropDown] = useState(false)
    const [membersStore, setMembers] = useState(members)


    const toggleDropDown = () => {
        setDropDown((prevDropDown) => !prevDropDown);
    };

    const toggleMemberSelection = (memberId) => {
        // Update the selected state of the member with the given ID
        setMembers((prevMembers) =>
            prevMembers.map((member) =>
                member.id === memberId ? { ...member, selected: !member.selected } : member
            )
        );
    };
    return (
        <>
            <div>
                {clickable ?
                    (<div onClick={toggleDropDown} >
                        <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                            <div className={flexi.flexRowSmolGap}>
                                <p style={{ color: `var(--Final_White)` }}> Assign Task To</p>
                                {membersStore
                                    .filter((member) => member.selected)
                                    .map((selectedMember) => (
                                        <img
                                            key={selectedMember.id}
                                            src="/icons/Profile Pict (Cream).png"
                                            alt="Selected Member"
                                            className={logos.small}
                                            style={{ zIndex: 1 }}
                                        />
                                    ))}
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
                                    {membersStore
                                        .filter((member) => member.selected)
                                        .map((selectedMember) => (
                                            <img
                                                key={selectedMember.id}
                                                src="/icons/Profile Pict (Cream).png"
                                                alt="Selected Member"
                                                className={logos.small}
                                                style={{ zIndex: 1 }}
                                            />
                                        ))}
                                </div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                            </div>
                            <div className={contentblock.line}></div>
                        </div>
                    )}


                {dropDown && (<div style={{ border: '10px solid', borderColor: `var(--Final_Black)` }}>
                    {membersStore.map((member, index) => (
                        <div key={member.id} className={`${flexi.spacing} ${member.selected ? 'flexi.inLine' : ''}`} style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }} onClick={() => toggleMemberSelection(member.id)}>
                            <div className={flexi.flexRowSmolGap}>
                                <div className={logos.small} style={{ backgroundImage: `url(${member.selected ? '/icons/Check.png' : '/icons/Cancellation.png'})`, zIndex: 1 }}></div>
                                <div className={logos.small} style={{ backgroundImage: `url("/icons/Profile Pict (Cream).png")`, zIndex: 1 }}></div>
                                <p style={{ color: `var(--Final_White)` }}>{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </>
    )
}

export default TaskSummariserDropDown