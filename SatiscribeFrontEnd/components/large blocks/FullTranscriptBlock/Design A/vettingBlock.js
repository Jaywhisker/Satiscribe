import React, { useState, useEffect, useRef } from 'react'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
// import VettingSentence from '../../InputFields/transcriptVettingField'
import SentenceData from '@/data/Sentence.json'
// import PargraphData from '@/data/Paragraph.json'
import TranscriptTags from '../Tags and Labels/transcriptTagsLabels'
import logos from '@/styles/Logos.module.css'
import PersonTag from '../Tags and Labels/taggingPerson'
import { onInputDelete, setCursorPosition, handleToggleFiller, handleDropDown, clickDropDown } from '../EditingTranscriptFunctions'



function VettingBlock({ SentenceData }) {
    console.log(SentenceData)
    const initialData = SentenceData.paragraphs

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)
    const [exampleData, setExampleData] = useState(initialData)
    const [paragraphID, setParagraphID] = useState(0)
    const [disabledContainer, setDisabledContainer] = useState(() => Array.from({ length: exampleData.length }, () => false));
    const [dropDowncontainer, setDropDowncontainer] = useState(() => Array.from({ length: exampleData.length }, () => false));
    const [keyCode, setkeyCode] = useState('')

    // Initialize an array to store the indices where the speaker changes
    const speakerChangeIndices = [];

    for (let i = 0; i < initialData.length; i++) {
        // If it's the first paragraph, always add the index to the array
        if (i === 0) {
            speakerChangeIndices.push(i);
        } else {
            // Check if the speaker has changed from the previous paragraph
            if (initialData[i].speaker !== initialData[i - 1].speaker) {
                speakerChangeIndices.push(i);
            }
        }
    }

    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );

    const [dropDowncontainer2, setDropDowncontainer2] = useState(() => Array.from({ length: speakerChangeIndices.length }, () => false))


    function handlePersonSelected(index, tagName, speakerChangeIndices, exampleData, setExampleData, setDropDowncontainer2, dropDowncontainer2) {
        const specialIndex = speakerChangeIndices.findIndex((element) => element == index)
        console.log(specialIndex)
        if (specialIndex == speakerChangeIndices.length - 1) {
            let range = arrayRange(index, exampleData.length - 1, 1)
            console.log(range)
            for (let i of range) {
                exampleData[i].speaker = tagName;
            }

        } else {
            const stopPoint = speakerChangeIndices[specialIndex + 1]
            let range = arrayRange(index, stopPoint - 1, 1);
            console.log(range)
            for (let i of range) {
                exampleData[i].speaker = tagName;
            }
        }
        setExampleData([...exampleData]);
        clickDropDown2(index, setDropDowncontainer2, speakerChangeIndices, dropDowncontainer2)


        // Set the dropdowncontainerindex to the opposite of what it currently is
    }

    function clickDropDown2(id, setDropDowncontainer2, speakerData, dropDowncontainer2) {
        let partialdropDrown2 = Array.from({ length: speakerData.length }, () => false)
        const index = speakerData.findIndex((element) => element == id)
        partialdropDrown2[index] = !dropDowncontainer2[index]
        setDropDowncontainer2(partialdropDrown2)
    }

    const nameProfileContainer = {
        "Hubob": "Profile Pict (Cream).png",
        "Morgan": "Profile Pict (Yellow).png",
        "Jefferson": "Profile Pict (Purple).png",
        "Derrick": "Profile Pict (Pink).png",
    }

    const tagDictionary = {
        "Filler Words": ["<b>", "</b>"],
        "Uncertain": ["<i>", "</i>"],
        "Unrelated": ["<em>", "</em>"]
    }

    const allTags = [...new Set(["Filler Words", "Uncertain", "Unrelated"])];
    const allPeople = [...new Set(["Hubob", "Morgan", "Jefferson", "Derrick"])];

    const paragraphRef = useRef(null)

    useEffect(() => {
        const paragraphId = `paragraph_${paragraphID}`
        setCursorPosition(document.getElementById(paragraphId), cursorPointerLocation)
        // console.log(exampleData[cursorPointerLocation])
    }, [cursorPointerLocation]);

    // console.log(disabledContainer)

    const keydown = (event) => {
        if (event.ctrlKey) {
            setkeyCode([event.key, 'control'])
        } else if (event.key === 'Enter' || event.key === ';') {
            event.preventDefault();
            setkeyCode(event.key)
        } else {
            setkeyCode(event.key)
        }
    }

    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`} style={{ marginBottom: 50 }}>
                        <h5>Full Transcript Editting</h5>
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

                    <ul className={`${list.smolGap}`} style={{ listStyle: 'none', paddingLeft: '0' }}>
                        {exampleData.map((data, index) => (
                            <div>
                                {speakerChangeIndices.includes(index) && (
                                    // Conditional content when there is a speaker change
                                    <PersonTag
                                        backgroundurl={`url("/profiles/${nameProfileContainer[data.speaker]}")`}
                                        name={data.speaker}
                                        handleDropDown={(tagName) => handlePersonSelected(index, tagName, speakerChangeIndices, exampleData, setExampleData, setDropDowncontainer2, dropDowncontainer2)}
                                        Dropdown={dropDowncontainer2[speakerChangeIndices.findIndex((element) => element == index)]}
                                        allPeople={allPeople}
                                        onClick={() => clickDropDown2(index, setDropDowncontainer2, speakerChangeIndices, dropDowncontainer2)}
                                    />
                                    // <li style={{ marginTop: 50 }}>
                                    //     <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter} `} style={{ width: '100%' }}>
                                    //         <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/profiles/${nameProfileContainer[data.speaker]}")`, zIndex: 1 }}></div>
                                    //         <p>{data.speaker}</p>
                                    //     </div>
                                    // </li>
                                )}
                                <li>
                                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter} `} style={{ width: '100%' }}>

                                        <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                                        <p id={`paragraph_${index}`}
                                            contentEditable="true"
                                            style={{ color: `var(--Final_White)`, width: '75%' }}
                                            dangerouslySetInnerHTML={{ __html: `${data['transcript']}` }}
                                            onInput={(event) => onInputDelete(event, index, exampleData, setExampleData, setCursorPositionLocation, setParagraphID, keyCode)}
                                            onKeyDown={(event) => keydown(event)}
                                            ref={paragraphRef}
                                        />
                                        {data.tags.length > 0 ? (
                                            <TranscriptTags
                                                type='tags'
                                                name={data.tags}
                                                disabled={disabledContainer[index]}
                                                allTags={allTags}
                                                handleDropDown={(newTag) => handleDropDown(index, newTag, tagDictionary, exampleData, setExampleData, setDropDowncontainer, dropDowncontainer)}
                                                Dropdown={dropDowncontainer[index]}
                                                onClick={() => clickDropDown(index, setDropDowncontainer, exampleData, dropDowncontainer)}

                                            />
                                        ) : (null)}
                                    </div>
                                </li>
                            </div>
                        ))}
                    </ul>

                    {/* {exampleData.map((data) => (
                        <div>
                            <div className={`${flexi.flexRowSmolGap}  ${flexi.justifyStart} ${flexi.alignCenter} `}>
                                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/profiles/${nameProfileContainer[data.speaker]}")`, zIndex: 1 }}></div>
                                <p> {data.speaker} </p>
                            </div>
                            <ul className={`${list.mediumGap}`} style={{ listStyle: 'none', paddingLeft: '0' }}>

                                {data.sentences.map((subdata) => (
                                    <li>
                                        <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter} `} style={{ width: '100%' }}>
                                            <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                                            <div className={`${flexi.flexRowSmolGap}`} key={subdata['id']} style={{ width: '100%' }}>
                                                <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter}`} style={{ width: '100%' }}>
                                                    <p id={`paragraph_${subdata['id']}`}
                                                        contentEditable="true"
                                                        style={{ color: `var(--Final_White)`, width: '75%' }}
                                                        dangerouslySetInnerHTML={{ __html: `${subdata['transcript']}` }}
                                                        onInput={(event) => onInput(event, subdata['id'], exampleData, setExampleData, setCursorPositionLocation, setParagraphID)}
                                                        ref={paragraphRef}
                                                    />
                                                    {subdata.tags.length > 0 ? (
                                                        <TranscriptTags
                                                            type='tags'
                                                            name={subdata.tags}
                                                            disabled={disabledContainer[subdata['id']]}
                                                            allTags={allTags}
                                                            handleDropDown={(newTag) => handleDropDown(subdata['id'], newTag, tagDictionary, exampleData, setExampleData, setDropDowncontainer, dropDowncontainer)} Dropdown={dropDowncontainer[subdata['id']]}
                                                            onClick={() => clickDropDown(subdata['id'], setDropDowncontainer, exampleData, dropDowncontainer)}
                                                        />
                                                    ) : (null)}

                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    )
                    )} */}
                </div>
            </div >
        </>
    )
}


export default VettingBlock