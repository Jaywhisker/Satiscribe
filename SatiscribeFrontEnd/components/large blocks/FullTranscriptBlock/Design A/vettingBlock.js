import React, { useState, useEffect, useRef } from 'react'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
// import VettingSentence from '../../InputFields/transcriptVettingField'
import SentenceData from '@/data/Sentence.json'
import PargraphData from '@/data/Paragraph.json'
import TranscriptTags from '../Tags and Labels/transcriptTagsLabels'
import logos from '@/styles/Logos.module.css'
import { onInput, setCursorPosition, handleToggleFiller, handleDropDown, clickDropDown } from '../EditingTranscriptFunctions'



function VettingBlock() {
    const initialData = SentenceData.paragraphs

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)
    let sentenceCount = 0; // Initialize the running count of sentences outside the map function
    const [exampleData, setExampleData] = useState(
        initialData.map((paragraph, paragraphIndex) => {
            const sentencesWithIds = paragraph.sentences.map((sentence) => {
                sentenceCount++; // Increment the count for each sentence
                return {
                    transcript: sentence.transcript,
                    tags: sentence.tags,
                    audio: sentence.audio,
                    id: sentenceCount.toString(), // Use the count as the id for each sentence
                };
            });

            return {
                sentences: sentencesWithIds,
                speaker: paragraph.speaker,
            };
        })
    );
    const [paragraphID, setParagraphID] = useState(0)
    const [disabledContainer, setDisabledContainer] = useState(() => Array.from({ length: exampleData.reduce((sum, arr) => sum + arr.sentences.length, 0) }, () => false));
    const [dropDowncontainer, setDropDowncontainer] = useState(() => Array.from({ length: exampleData.length }, () => false));


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

    const paragraphRef = useRef(null)

    useEffect(() => {
        const paragraphId = `paragraph_${paragraphID}`
        setCursorPosition(document.getElementById(paragraphId), cursorPointerLocation)
        // console.log(exampleData[cursorPointerLocation])
    }, [cursorPointerLocation]);

    // console.log(disabledContainer)

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

                    {exampleData.map((data) => (
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
                    )}

                    {/* <ul className={`${list.mediumGap}`} style={{ listStyle: 'none', paddingLeft: '0' }}>

                        {exampleData.map((data, index) => (
                            <li>
                                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                                <div className={`${flexi.flexRowSmolGap}`} key={index}>
                                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter}`} style={{ width: '100%' }}>
                                        <p id={`paragraph_${index}`} contentEditable="true" style={{ color: `var(--Final_White)`, width: '75%' }} dangerouslySetInnerHTML={{ __html: `${data['transcript']}` }} onInput={(event) => onInput(event, index, exampleData, setExampleData, setCursorPositionLocation, setParagraphID)} />
                                        {data.tags.length > 0 ? (
                                            <TranscriptTags type='labels' name={data.tags} disabled={disabledContainer[index]} />
                                        ) : (null)}

                                    </div>
                                </div>
                            </li>
                        )
                        )}


                    </ul> */}
                </div>
            </div >
        </>
    )
}

// {initialData.sentences.map((sentence, index) =>
//     (
//         <li>
//             <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter}`}>
//                 <p
//                     id="paragraph"
//                     ref={divRef}
//                     contentEditable="true"
//                     style={{ color: `var(--Final_White)`, width: '75%' }}
//                     dangerouslySetInnerHTML={{ __html: `${sentenceStates[index].transcript}` }}
//                     onInput={onInput}
//                 />
//                 {/* Change labels to tags to get nothing */}
//                 <TranscriptTagsYL type={sentence.tags === '' ? 'tags' : 'labels'} name={sentence.tags} thisindex={index} sentenceStates={sentenceStates} setSentenceStates={setSentenceStates} />
//             </div>
//         </li>
//     ))}

export default VettingBlock