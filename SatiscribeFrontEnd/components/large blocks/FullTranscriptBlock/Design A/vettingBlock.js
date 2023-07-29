import React, { useState } from 'react'
import style from '@/styles/Colourtest.module.css'
import flexi from '@/styles/Flexible.module.css'
import list from '@/styles/List.module.css'
import logos from '@/styles/Logos.module.css'
import contentblock from '@/styles/components/contentblocks.module.css'
import VettingSentence from '../../InputFields/transcriptVettingField'
import SentenceData from '@/data/Sentence.json'


function VettingBlock() {

    const [toggleFiller, setToggleFiller] = useState(true);
    const [cursorPointerLocation, setCursorPositionLocation] = useState(0)

    const initialData = SentenceData

    const handleToggleFiller = (event) => {
        setToggleFiller(event.target.checked);
    };

    return (
        <>
            <div className={`${contentblock.largeBlockContainerNoHover} ${contentblock.contentBlockAlignment}`}>
                <div className={`${flexi.innerMargin}`}>

                    <div className={`${flexi.flexRowSmolGap} ${flexi.justifySpaceBetween}`}>
                        <h5>Full Transcript Vetting</h5>
                        <div className={`${flexi.flexRowSmolGap} ${flexi.alignCenter}`}>
                            <h5 style={{ color: toggleFiller ? `var(--Final_Red)` : `var(--Final_Red_50)` }}>Filler Words</h5>
                            <label className={`${contentblock.switch}`}>
                                <input
                                    type="checkbox"
                                    checked={toggleFiller}
                                    onChange={handleToggleFiller}
                                />
                                <span className={`${contentblock.roundslider}`}></span>
                            </label>
                        </div>
                    </div>

                    <ul>
                        <VettingSentence text={initialData.sentences[0].transcript} placeholder={'yes'}></VettingSentence>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default VettingBlock