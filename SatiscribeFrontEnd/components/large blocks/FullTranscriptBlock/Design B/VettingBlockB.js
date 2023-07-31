import React, { useState, useEffect } from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import ParagraphData from '@/data/Paragraph.json'
import TranscriptTags from '../Tags and Labels/transcriptTagsLabels'
import { onInput, setCursorPosition, handleToggleFiller } from '../EditingTranscriptFunctions'


function VettingBlockB() {

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)
    const initialData = ParagraphData.paragraph
    const [exampleData, setExampleData] = useState(initialData)
    const [paragraphID, setParagraphID] = useState(0)
    const [disabledContainer, setDisabledContainer] = useState(() => Array.from({ length: exampleData.length }, () => false));


    useEffect(() => {
        const paragraphId = `paragraph_${paragraphID}`
        setCursorPosition(document.getElementById(paragraphId), cursorPointerLocation)
        // console.log(exampleData[cursorPointerLocation])
    }, [exampleData, cursorPointerLocation]);

    console.log(exampleData)

    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment} ${flexi.flexColumnSmolGap}`}>
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
                            <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                            <div className={`${flexi.flexRowSmolGap} ${flexi.justifyStart} ${flexi.alignCenter}`}>
                                <p id={`paragraph_${index}`} contentEditable="true" style={{ color: `var(--Final_White)`, width: '75%' }} dangerouslySetInnerHTML={{ __html: `${data['transcript']}` }} onInput={(event) => onInput(event, index, exampleData, setExampleData, setCursorPositionLocation, setParagraphID)} />
                                {data.tags.length > 0 ? (
                                    <TranscriptTags type='labels' name={data.tags} disabled={disabledContainer[index]} />
                                ) : (null)}

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