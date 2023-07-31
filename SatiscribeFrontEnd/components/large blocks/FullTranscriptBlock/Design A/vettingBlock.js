import React, { useState, useEffect, useRef } from 'react'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
// import VettingSentence from '../../InputFields/transcriptVettingField'
import SentenceData from '@/data/Sentence.json'
import TranscriptTags from '../Tags and Labels/transcriptTagsLabels'
import logos from '@/styles/Logos.module.css'
import { onInput, setCursorPosition, handleToggleFiller } from '../EditingTranscriptFunctions'



function VettingBlock() {
    const initialData = SentenceData.sentences

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)
    const [deletePressed, setDeletePressed] = useState(false)
    const [exampleData, setExampleData] = useState(initialData)
    const [paragraphID, setParagraphID] = useState(0)
    const [disabledContainer, setDisabledContainer] = useState(() => Array.from({ length: exampleData.length }, () => false));

    useEffect(() => {
        const paragraphId = `paragraph_${paragraphID}`
        setCursorPosition(document.getElementById(paragraphId), cursorPointerLocation)
        // console.log(exampleData[cursorPointerLocation])
    }, [exampleData, cursorPointerLocation]);

    console.log(disabledContainer)

    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
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

                    <ul className={`${list.mediumGap}`} style={{ listStyle: 'none', paddingLeft: '0' }}>

                        {exampleData.map((data, index) => (
                            <li>
                                <div className={`${flexi.flexRowSmolGap}`} key={index}>
                                    <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>

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


                    </ul>
                </div>
            </div>
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