import React from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import tags from '@/styles/components/large blocks/tags.module.css'

function TranscriptTags({type, name, disabled, allTags, handleDropDown, Dropdown, onClick, onPress}) {

    var filteredTags;
    if ( allTags!== undefined) {
        filteredTags = allTags.filter(tagName => tagName !== name);
    }

    return (
        <>
        { (type == 'labels' && name =='highlight') ? (
            <div className={`${tags.highlightTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_Gray)`, width:'75%'}}>highlight</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/iconsFinalGray/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        ) : (type =='labels' && name =='action items') ? (
            <div className={`${tags.actionTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>action items</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        )  : (type =='labels' && name =='key dates') ? (
            <div className={`${tags.keydatesTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>key dates</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
        ) : (type =='labels' && name =='meeting details') ? (
            <div className={`${tags.meetingDetailsTags} ${flexi.flexRowNoGap} ${flexi.alignCenter}  ${flexi.justifyCenter}`}>
                <h6 className={`${tags.transcribeLabelText}`} style={{color:`var(--Final_White)`, width:'75%'}}>meeting details</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Cancellation.png")`, zIndex: 1}}></div>
            </div>
            
        ) : (type =='tags' && disabled) ? (
            <div className={`${tags.labelsTagDisabled} ${flexi.flexRowSmollestGap} ${flexi.alignCenter}  ${flexi.justifyStart}`}>
                <h6 className={`${tags.transcribeCleaningTagText}`} style={{color:`var(--Final_Gray)`, textDecoration:'underline'}}>{name}</h6>
                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/iconsFinalGray/Dropdown.png")`, zIndex: 1}}></div>
            </div>
        ):(type =='tags') ? (
            <div className={`${flexi.flexColumnNoGap}`} style={{position:'relative'}}  onClick={onPress}>
                <div className={`${tags.labelsTag} ${flexi.flexRowSmollestGap} ${flexi.alignCenter}  ${flexi.justifyStart}`} style={{borderRadius: Dropdown ? '5px 5px 0px 0px' : 5}}>
                    <h6 className={`${tags.transcribeCleaningTagText}`} style={{color:`var(--Final_Gray)`, textDecoration:'underline'}} onClick={onClick}>{name}</h6>
                    <div className={logos.smallestclickable} style={{ backgroundImage: Dropdown ? `url("/iconsFinalGray/Dropup.png")` : `url("/iconsFinalGray/Dropdown.png")`, zIndex: 1}} onClick={onClick}></div>
                </div>
                
                {Dropdown && (
                    <div className={`${flexi.flexColumnMediumGap}`}>
                        {filteredTags.map((tagName, index) => (
                            <div key={index} className={`${tags.labelsDropDown} ${flexi.flexRowSmollestGap} ${flexi.alignCenter} ${flexi.justifyStart}`} style={{ top: `calc(${index} * 4vh + 4.5vh)` }} onClick={() => handleDropDown(tagName)}>
                                <h6 className={`${tags.transcribeCleaningTagText}`} style={{color:`var(--Final_Gray)`}}>{tagName}</h6>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ):(null)
        }
        </>                  
    )
}

export default TranscriptTags