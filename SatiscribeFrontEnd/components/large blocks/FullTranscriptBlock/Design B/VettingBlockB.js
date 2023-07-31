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

    const allTags = [...new Set(initialData.map(data => data.tags))];
    console.log(allTags)

    function clickDropDown(id) {
        let partialdropDrown = Array.from({ length: exampleData.length }, () => false)
        partialdropDrown[id] = !dropDowncontainer[id]
        setDropDowncontainer(partialdropDrown)
    }

    function handleDropDown(id, newTag, tagDictionary) {
        const originalTag = exampleData[id]['tags']
        const originalTranscript = exampleData[id]['transcript']
        var modifiedTranscript = originalTranscript.replace(tagDictionary[originalTag][0], tagDictionary[newTag][0])
        modifiedTranscript = originalTranscript.replace(tagDictionary[originalTag][1], tagDictionary[newTag][1])
        setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, transcript: modifiedTranscript } : data)))
        setExampleData((ExampleData) => ExampleData.map((data, i) => (i === id ? { ...data, tags: newTag } : data)))
        clickDropDown(id)
    }

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
                            <div className={`${flexi.flexRowSmollerGap}`}>
                                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/profiles/${nameProfileContainer[data.speaker]}")`, zIndex: 1 }}></div>
                                <div className={logos.evensmallerclickable} style={{ backgroundImage: `url("/icons/Sound on.png")`, zIndex: 1 }}></div>
                            </div>
                            <div className={`${flexi.flexRowMediumGap} ${flexi.justifyStart} ${flexi.alignCenter}`}>
                                <p id={`paragraph_${index}`} contentEditable="true" style={{ color: `var(--Final_White)`, width: '80%' }} dangerouslySetInnerHTML={{ __html: `${data['transcript']}` }} onInput={(event) => onInput(event, index, exampleData, setExampleData, setCursorPositionLocation, setParagraphID)} />
                                {data.tags.length > 0 ? (
                                    <TranscriptTags type='labels' name={data.tags} disabled={disabledContainer[index]} allTags={allTags} handleDropDown={(newTag) => handleDropDown(index, newTag, tagDictionary)} Dropdown={dropDowncontainer[index]} onClick={() => clickDropDown(index)} />
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