import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import tags from '@/styles/components/large blocks/tags.module.css'

function SpeakerTag({ backgroundurl, name, handleDropDown, Dropdown, allPeople, onClick }) {

    const nameProfileContainer = {
        "Hubob": "Profile Pict (Cream).png",
        "Morgan": "Profile Pict (Yellow).png",
        "Jefferson": "Profile Pict (Purple).png",
        "Derrick": "Profile Pict (Pink).png",
    }

    var filteredPeople;
    if (allPeople !== undefined) {
        filteredPeople = allPeople.filter(Name => Name !== name);
    }
    
    return (
        <>  
            <div className={`${flexi.flexColumnNoGap}`} style={{ position: 'relative' }} onClick={onClick} >
                <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter} `} >
                    <div className={logos.evensmallerclickable} style={{ backgroundImage: backgroundurl, zIndex: 1 }} onClick={onClick}></div>
                    <p onClick={onClick}>{name}</p>
                </div>

                {Dropdown && (
                    <div >
                        <div className={`${flexi.flexColumnMediumGap}`} style={{ zIndex: 0 }}>
                            {filteredPeople.map((tagName, index) => (
                                <div key={index} className={`${tags.peopleLabel} ${flexi.flexRowSmollestGap} ${flexi.alignCenter} ${flexi.justifyStart}`} style={{ top: `calc(${index} * 5.2vh + 4.5vh)` }} onClick={() => handleDropDown(tagName)}>
                                    <div className={`${tags.peopleLabelInnerStyling} ${flexi.flexRowSmolGap} `}>
                                        <div className={`${flexi.flexColumnNoGap} ${flexi.justjustifyCenter}`}>
                                            <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/profiles/${nameProfileContainer[tagName]}")`, zIndex: 1 }} onClick={onClick}></div>
                                        </div>
                                        <div className={`${flexi.flexColumnNoGap} ${flexi.justjustifyCenter}`}>
                                            <h6 className={`${tags.transcribeCleaningTagText}`} style={{ color: `var(--Final_White)` }}>{tagName}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SpeakerTag