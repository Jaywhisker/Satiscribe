import React, { useState, useEffect, useRef } from 'react'
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

    const checkboxRef = useRef(null);


    const [sentenceStates, setSentenceStates] = useState(
        initialData.sentences.map((sentence, index) => ({
            index: index,
            type: sentence.tags,
            identifier:
                sentence.tags === 'Filler Words' ? 'b' :
                    sentence.tags === 'Unrelated' ? 'em' :
                        sentence.tags === 'Uncertain' ? 'i' :
                            null,
            trashClicked: sentence.tags != '' ? false : null,
        }))
    );


    useEffect(() => {
        const allFillerFalse = !sentenceStates.some(
            (state) => state.type === 'Filler Words' && state.trashClicked === false
        );
        if (allFillerFalse) {
            console.log('yes')
            setToggleFiller(false)
        }
    }, [sentenceStates]);

    const handleToggleFiller = (event) => {
        setToggleFiller(event.target.checked);
        // Create a new array with updated trashClicked values
        const updatedSentenceStates = sentenceStates.map((state) => {
            if (state.type === 'Filler Words') {
                return {
                    ...state,
                    trashClicked: event.target.checked === false ? true : false
                }
            }
            return state
        });

        // Update the state with the new array
        setSentenceStates(updatedSentenceStates);
    }

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
                                    ref={checkboxRef}
                                    type="checkbox"
                                    checked={toggleFiller}
                                    onChange={handleToggleFiller}
                                    value={toggleFiller}
                                />
                                <span className={`${contentblock.roundslider}`}></span>
                            </label>
                        </div>
                    </div>

                    <ul className={`${list.mediumGap}`}>

                        {initialData.sentences.map((sentence, index) =>
                        (
                            <VettingSentence
                                key={index}
                                thisindex={index} // It's recommended to use a unique key prop when using map
                                text={sentence.transcript}
                                placeholder={'yes'}
                                // togglefiller={toggleFiller}
                                tagName={sentence.tags}
                                sentenceStates={sentenceStates}
                                setSentenceStates={setSentenceStates}
                            />
                        )
                        )}
                        {/* <VettingSentence text={initialData.sentences[0].transcript} placeholder={'yes'} togglefiller={toggleFiller} tagName={initialData.sentences[0].tags}></VettingSentence> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default VettingBlock