import React, { useEffect, useState } from 'react'
import contentblock from '@/styles/components/contentblocks.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'

function EmailDropdown({ clickable, onClick, dataset, resetDropDown }) {

    const backgroundColors = [`var(--Final_Component_Dark_Grey)`, `var(--Final_Component_Lighter_Grey)`];
    const [dropDown, setDropDown] = useState(false)
    const [emailList, setEmailList] = useState([])
    const [effectRan, setEffectRan] = useState(true)

    useEffect(() => {
        if (clickable && dataset) {
            setEmailList(Object.keys(dataset))
            setEffectRan(true)
        }
    }, [clickable, dataset]);

    useEffect(() => {
        if (resetDropDown) {
            setDropDown(false)
        }
    }, [resetDropDown, dropDown]); // include dropDown in the dependencies array

    return (
        <>
            {effectRan &&
                <div>
                    {clickable ?
                        (<div>
                            <div onClick={() => setDropDown(!dropDown)} className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                                <div className={flexi.flexRowSmolGap}>
                                    <p style={{ color: `var(--Final_White)` }}></p>
                                    {emailList.filter((email) => dataset[email]).map((selectedEmail) => (
                                        <img
                                            key={selectedEmail}
                                            src="/profiles/Profile Pict (Cream).png"
                                            alt={selectedEmail}
                                            className={logos.small}
                                            style={{ zIndex: 1 }}
                                        />))}
                                </div>
                                <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                            </div>
                            <div className={contentblock.line}></div>
                        </div>
                        ) : (
                            <div>
                                <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                                    <p style={{ color: `var(--Final_White)` }}> Assign Task To</p>
                                    <div className={logos.smallclickable} style={{ backgroundImage: `url("/icons/Dropdown.png")`, zIndex: 1 }}></div>
                                </div>
                                <div className={contentblock.line}></div>
                            </div>
                        )}
                    {dropDown &&
                        <div style={{ border: '4px solid', borderTop: 'none', borderColor: `var(--Final_Black)` }}>
                            {emailList.map((email, index) => (
                                <div
                                    key={email}
                                    className={`${flexi.spacing} ${dataset[email] ? 'flexi.inLine' : ''}`}
                                    style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}
                                    onClick={() => onClick(email)}>

                                    <div className={`${flexi.flexRowSmolGap} ${contentblock.clickable}`}>
                                        <div className={logos.small} style={{ backgroundImage: `url(${dataset[email] ? '/icons/CheckboxTicked.png' : '/icons/Checkbox.png'})`, zIndex: 1 }}></div>
                                        <img
                                            src="/profiles/Profile Pict (Cream).png"
                                            alt={email}
                                            className={logos.small}
                                            style={{ zIndex: 1 }}
                                        />
                                        <p style={{ color: `var(--Final_White)` }}>{email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default EmailDropdown
