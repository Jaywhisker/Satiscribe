import React, { useState, useEffect, useRef } from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import ParagraphData from '@/data/Paragraph.json'
import TranscriptTags from '../Tags and Labels/transcriptTagsLabels'
import {setCursorPosition, handleToggleFiller, handleDropDown, clickDropDown, settingFocus, loseFocus, onInputDelete} from '../EditingTranscriptFunctions'


function VettingBlockB() {

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0);
    const initialData = ParagraphData.paragraph;
    const [exampleData, setExampleData] = useState(initialData);
    const [paragraphID, setParagraphID] = useState(0);
    const [disabledContainer, setDisabledContainer] = useState(() =>Array.from({ length: exampleData.length }, () => false));
    const [dropDowncontainer, setDropDowncontainer] = useState(() =>Array.from({ length: exampleData.length }, () => false));
    const [previousFocusData, setPreviousFocusData] = useState('');
    const [keyCode, setkeyCode] = useState('')

    const nameProfileContainer = {
        "Hubob": "Profile Pict (Cream).png",
        "Morgan":"Profile Pict (Yellow).png",
        "Jefferson": "Profile Pict (Purple).png",
        "Derrick": "Profile Pict (Pink).png",
    }

    const tagDictionary = {
        "Filler Words": ["<b>", "</b>"],
        "Uncertain": ["<i>", "</i>"],
        "Unrelated": ["<em>", "</em>"]
    }

    const focusedDictionary = {
        'B': ['--Final_Red_15','--Final_Red_35'],
        'I': ['--Final_Tag_Orange_10','--Final_Tag_Orange_25'],
        'EM': ['--Final_Tag_Yellow_10','--Final_Tag_Yellow_25'],
        'STRONG': ['--Final_Tag_Green_10','--Final_Tag_Green_25']
    }

    const allTags = [...new Set(initialData.map(data => data.tags))];

    useEffect(()=> {
        const startingPosition = exampleData[0].transcript.length
        setCursorPosition(document.getElementById('paragraph_0'), startingPosition)
        setCursorPositionLocation(startingPosition)
    }, [])

    useEffect(() => {
        const paragraphId = `paragraph_${paragraphID}`
        setCursorPosition(document.getElementById(paragraphId), cursorPointerLocation)
    }, [cursorPointerLocation]);
    
    const keydown =(event) => {
        setkeyCode(event.key)
    }
      
    return (
        <>
            <div id='transcriptContainer' className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment} ${flexi.flexColumnSmolGap}`} onClick={(event) => loseFocus(event, focusedDictionary,previousFocusData, setPreviousFocusData, setDropDowncontainer, exampleData) }>
                <div className={`${flexi.innerMargin} ${flexi.flexColumnSmolGap}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Full Transcript Vetting</h5>
                        <div className={`${flexi.flexRowSmolGap} ${flexi.alignCenter}`}>
                            <h5 style={{ color: toggleFiller ? `var(--Final_Red)` : `var(--Final_Red_50)` }}>Filler Words</h5>
                            <label className={`${contentblock.switch}`}>
                                <input
                                    type="checkbox"
                                    checked={toggleFiller}
                                    onChange={(event) => handleToggleFiller(event, exampleData, setExampleData, toggleFiller, setToggleFiller, setDisabledContainer)}
                                />
                                <span className={`${contentblock.roundslider}`}></span>
                            </label>
                        </div>
                    </div>

                    {exampleData.map((data, index) => (
                        <div className={`${flexi.flexColumnSmolGap}`} key={index}>
                            <div className={`${flexi.flexRowSmollerGap}`}>
                                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/profiles/${nameProfileContainer[data.speaker]}")`, zIndex: 1 }}></div>
                                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                            </div>
                            <div className={`${flexi.flexRowMediumGap} ${flexi.justifyStart} ${flexi.alignCenter}`}>
                                <p id={`paragraph_${index}`} 
                                    contentEditable="true" 
                                    style={{ color: `var(--Final_White)`, width: '80%' }} 
                                    dangerouslySetInnerHTML={{ __html: `${data['transcript']}`}}
                                    onKeyDown={(event) => keydown(event)} 
                                    onInput={(event) => onInputDelete(event, index, exampleData, setExampleData, setCursorPositionLocation, setParagraphID, keyCode)}
                                    />
                                { data.tags.length > 0 ? (
                                    <TranscriptTags 
                                        type='tags' 
                                        name={data.tags} 
                                        disabled={disabledContainer[index]} 
                                        allTags={allTags} 
                                        handleDropDown={(newTag) => handleDropDown(index, newTag, tagDictionary, exampleData, setExampleData, setDropDowncontainer, dropDowncontainer)} Dropdown={dropDowncontainer[index]} 
                                        onClick={() => clickDropDown(index, setDropDowncontainer, exampleData, dropDowncontainer)}
                                        onPress= {() => settingFocus(index, focusedDictionary, setPreviousFocusData, previousFocusData)}
                                        />
                                ) : (null) }

                            </div>
                        </div>
                        )
                    )}
                
                </div>
            </div>
        </>
    )
}

export default VettingBlockB